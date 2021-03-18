import React from 'react';
import { Image, Nav, NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import logo from '../../images/logo.png'
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
      <Nav.Link className="menu-item" href="#deets">Home</Nav.Link>
      <Nav.Link  className="menu-item" href="#memes">Destination</Nav.Link>
      <Nav.Link className="menu-item" href="#memes">Blog</Nav.Link>
      <Nav.Link  className="menu-item" href="#memes">Contact</Nav.Link>
      <Nav.Link className="menu-item" href="#memes"><button className="btn btn-primary">Login</button></Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    );
};

export default Header;