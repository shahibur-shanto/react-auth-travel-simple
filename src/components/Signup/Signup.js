import React, { useContext, useState } from "react";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import "./Signup.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import {UserContext} from '../../App';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Signup = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });

  const googleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const  {displayName,email} = result.user;
        const signInUser = {name:displayName,email}
        setLoggedInUser(signInUser);
        history.replace(from);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.message);
        // ...
      });
  };

  const handleSubmit = (e)=>{
      console.log('clicked')
      if(newUser && user.email && user.password){
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((result) => {
        // Signed in 
        const newUserInfo = {...user};
          newUserInfo.error = "";
          newUserInfo.success= true;
            setUser(newUserInfo);
            updateUserName(user.name);

        // ...
      })
      .catch((error) => {
          const newUserInfo = {...user};
          newUserInfo.error = error.message;
          newUserInfo.success=false;
        setUser(newUserInfo);
      });
    }
    if (!newUser && user.email && user.password) {
        firebase
          .auth()
          .signInWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            const newUserInfo = { ...user };
            newUserInfo.error = "";
            newUserInfo.success = true;
            setUser(newUserInfo);
            console.log("sign in info", res.user);
            // ...
          })
          .catch((error) => {
            const newUserInfo = { ...user };
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            setUser(newUserInfo);
          });
      }
      e.preventDefault();
  }

  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("user name updated");
      })
      .catch(function (error) {
        // An error happened.
      });
  };


  const handleBlur = (e)=>{
    let isFormValid = true; 
    if(e.target.name==='email'){
        isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        console.log(e.target.value)
     }
     if(e.target.name==='password'){
        isFormValid = /\d{1}/.test(e.target.value) && e.target.value.length > 8;
        console.log(e.target.value)
     }
     if(isFormValid){
        const newUserInfo = {...user}
        newUserInfo[e.target.name] = e.target.value; 
        setUser(newUserInfo);
     }
  }

  const loginWithFacebook = ()=>{
    firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;
    const  {displayName,email} = user;
        const signInUser = {name:displayName,email}
        setLoggedInUser(signInUser);
        history.replace(from);

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    let errorCode = error.code;
    let errorMessage = error.message;
    // The email of the user's account used.
    let email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    let credential = error.credential;

    // ...
  });
  }
   return (
    <div className="form-div">
    <form onSubmit={handleSubmit}>
        {newUser && <>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          placeholder="Your Name"
          className="form-control"
          required
        ></input>
        </>
        }
        <label htmlFor="name">Email:</label>
        <input
          type="email"
          onBlur={handleBlur}
          name="email"
          placeholder="Your Email"
          className="form-control"
          required
        ></input>
        <label for="password">password:</label>
        <input
          type="password"
          onBlur={handleBlur}
          name="password"
          placeholder="password"
          className="form-control"
          required
        ></input>
        {newUser && <><label for="confirm-password">Confirm password:</label>
        <input
          type="password"
          name="confirm-password"
          onBlur={handleBlur}
          placeholder="confirm password"
          className="form-control"
          required
        ></input></>}
        <div className="button-center">
          <input type="submit"  value={newUser? "Create Account" : "Sign in"} className="btn btn-warning"></input>
          <br />
          {!newUser && <p>No Account?<Link onClick={()=>{setNewUser(true)}}>Create Account</Link></p>}
        </div>
      </form>
      <p>{user.error}</p>
      {user.success && <p>User {newUser ?"created" : "Logged in"} successfully</p>}
      <div className="button-center">
        <h5>or</h5>
        <button className="btn btn-warning" onClick={googleSignIn}>
          continue with google
        </button>
        <br />
        <button onClick={loginWithFacebook} className="btn btn-warning">Continue with facebook</button>
      </div>
    </div>
  );
};

export default Signup;
