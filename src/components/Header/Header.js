import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom';
import logo from '../../images/cover.png'
import './Header.css';


const Header = () => {
    return (
        <>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><Image src={logo}></Image></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    {/* <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav> */}
    <Nav className="ml-auto">
      <Link className="menu-item" to="/home">Home</Link>
      <Link  className="menu-item" to="/destination/:vehicleType">Destination</Link>
      <Link className="menu-item" href="#memes">Blog</Link>
      <Link  className="menu-item" href="#memes">Contact</Link>
      <Link className="menu-item" to='/signup'><button className="btn btn-primary">Login</button></Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    );
};

export default Header;