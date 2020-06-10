import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">E-Comm</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/shop">Shop</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/mission">Mission</Nav.Link>
            <NavDropdown title="Users" id="basic-nav-dropdown">
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
