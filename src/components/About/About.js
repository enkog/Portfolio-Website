import React from 'react';
import {Container} from 'react-bootstrap';
import { frontend, backend, otherSkills, professionalSkills } from './Skills';
import './About.css';

const About = () => {
    
  const skills1 = frontend.map((skills1) => <p className="d-inline me-3">{skills1}</p>)
  const skills2 = backend.map((skills2) => <p className="d-inline me-3">{skills2}</p>)
  const skills3 = otherSkills.map((skills3) => <p className="d-inline me-3">{skills3}</p>)
  const skills4 = professionalSkills.map((skills4) => <p className="d-inline me-3">{skills4}</p>)

  return (
    <Container className='about-section d-flex justify-content-between gap-5 w-100' id='about'>
      <div className="w-50">
        <h3>About me</h3>
        <p>
          I am a super self-motivated software engineer with great learning abilities and a desire to always exceed expected results. I am willing, open, and ready to accept opportunities tailored at providing an ever progressive career experience and global exposure with both challenging and rewarding roles.
        </p>
        <p>
          Look through some of my work and experience! If you like what you see and have project you need coded, don’t hesistate to contact me.
        </p>
        <button type='button' className="btn mt-4">Get my Resume</button>
      </div>

      <div className='right-about-pane w-50'>
        <h5>Frontend</h5>
        <div>{skills1}</div><hr />

        <h5>Backend</h5>
        <div>{skills2}</div><hr />

        <h5>Other Skills</h5>
        <div>{skills3}</div><hr />

        <h5>Professional</h5>
        <div>{skills4}</div>
      </div>
    </Container>
  )
}

export default About;