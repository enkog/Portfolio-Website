import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav, Container, Image} from 'react-bootstrap';
import logo from '../../assets/images/logo.svg';
import '../Navigation/Navigation.css';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand href="intro"><Image src={logo} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className='w-100'>
        <Nav className="ms-auto">
          <NavLink to="intro" activeClassName="active">{'</Intro>'}</NavLink>
          <NavLink to="about" activeClassName="active">About</NavLink>
          <NavLink to="portfolio" activeClassName="active">Portfolio</NavLink>
          <NavLink to="contact" activeClassName="active">Contact</NavLink>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
