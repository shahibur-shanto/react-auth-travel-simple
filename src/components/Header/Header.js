import React, { useContext } from 'react';
import { Image, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/cover.png'
import './Header.css';


const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><Image src={logo}></Image></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Link className="menu-item" to="/home">Home</Link>
      <Link  className="menu-item" to="/home">Destination</Link>
      <Link className="menu-item" href="#">Blog</Link>
      <Link  className="menu-item" href="#">Contact</Link>
      <Link className="menu-item" to='/signup'><button className="btn btn-primary">{loggedInUser.name ? "Logout":"Login"} </button></Link>
    </Nav>

  </Navbar.Collapse>
  {loggedInUser.name && <p className="menu-item">Welcome: {loggedInUser.name}</p>}
</Navbar>

        </>
    );
};

export default Header;