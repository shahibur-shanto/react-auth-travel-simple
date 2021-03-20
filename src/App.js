import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Signup from './components/Signup/Signup';
import Destination from './components/Destination/Destination';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
    <div>
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <p>name: {loggedInUser.name}</p>
    <Router>
    <Switch>
    <Route exact path="/">
    <Header/>
    <Home/>
      </Route>
      <Route path="/home">
      <Header/>
      <Home/>
      </Route>
      <Route path="/signup">
      <Header/>
      <Signup/>
      </Route>
      <PrivateRoute path="/destination/:vehicleType">
        
        <Destination/>
      </PrivateRoute>
      </Switch>

    </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
