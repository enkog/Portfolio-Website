import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Skills from './Skills';
import './About.css';

const About = () => {
  return (
    <Container>
      <section className='about-section' id='about'>
        <Row>
          <Col xs={12} md={12} lg={6}>
            <h3>About me</h3>
            <p>
              My name is Nkiruka. I am a super self-motivated software engineer with great learning abilities and a desire to always exceed expected results.
              I am willing, open, and ready to accept opportunities tailored at providing an ever progressive career experience and global exposure with both challenging and rewarding roles.
            </p>
            <p>
              Look through some of my work and experience! If you like what you see and have project you need coded, don’t hesistate to contact me.
            </p>
            <a href='https://drive.google.com/file/d/1oJw8PY82l4luwjBX4LZLL-KTmvxOgn7b/view?usp=sharing'>
              <button type='button' className="btn mt-4">Get my Resume</button>
            </a>
          </Col>
          <Col xs={12} md={12} lg={6}>
            <Skills />
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default About;