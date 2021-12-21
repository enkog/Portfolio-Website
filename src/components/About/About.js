import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Skills from './Skills';
import './About.css';

const About = () => {
  return (
    <Container id='about'>
      <Row>
        <Col xs={12} md={12} lg={6}>
          <h3>About me</h3>
          <p>
            My name is Nkiruka. I am a super self-motivated software engineer with great learning abilities and a desire to always exceed expected results.
          </p>
          <p>
            Look through some of my work and experience! If you like what you see and have project you need coded, don’t hesistate to contact me.
          </p>
          <button type='button' className="btn mt-4">Get my Resume</button>
        </Col>
        <Col xs={12} md={12} lg={6}>
          <Skills />
        </Col>
      </Row>
    </Container>
  )
}

export default About;