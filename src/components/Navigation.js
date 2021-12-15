import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/images/logo.svg';
import '../styles/Navigation.css';
import {Navbar, Nav, Container, Image} from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar className='sticky-top'>
      <Container>
        <Navbar.Brand href="/"><Image src={logo} /></Navbar.Brand>
        <Nav className="ms-auto">
          <LinkContainer to="/" activeClassName="active"><span className="nav-link me-3">{'</Intro>'}</span></LinkContainer>
          <LinkContainer to="about" activeClassName="active"><span className="nav-link me-3">About</span></LinkContainer>
          <LinkContainer to="portfolio" activeClassName="active"><span className="nav-link me-3">Portfolio</span></LinkContainer>
          <LinkContainer to="contact" activeClassName="active"><span className="nav-link me-3">Contact</span></LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation;
