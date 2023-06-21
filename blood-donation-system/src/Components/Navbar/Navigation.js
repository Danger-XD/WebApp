import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



class Navigation extends Component {
  render() {
    return (
      <div>
         <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/home">
            <img
              alt=""
              src={require('./bldrp.png')} 
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Best Blood Bank
          </Navbar.Brand>
          <Nav className="mc-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/services">Blood Banks</Nav.Link>
            <Nav.Link href="/services2">Donors</Nav.Link>
            <NavDropdown title="Add new" id="basic-nav-dropdown">
              <NavDropdown.Item href="/addservice">Blood Bank</NavDropdown.Item>
              <NavDropdown.Item href="/addservice2">Donor</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
    );
  }
}

export default Navigation;
