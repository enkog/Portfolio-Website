import React from 'react'
import peace from '../assets/images/peace.png';
import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import angellist from '../assets/icons/angellist.png';
import medium from '../assets/icons/medium.png';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <div className="hero-section w-100">
      <div className='d-flex'>
        <div>
          <img src={peace} alt="peace emoji" className='mb-3' />
          <h1 className='mb-3'>Pretty code by <br/>ingenious person</h1>
          <p className='gray-text pe-5 w-75'>
            Hello I am a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have project you need coded, don’t hesistate to contact me.
          </p>
          <div className='socials d-flex justify-content-between align-items-center w-50'>
            <p className='gray-text'>My works in social networks</p>
            <p>
              <img src={github} alt="github icon" className='me-3' />
              <img src={linkedin} alt="linkedin icon" className='me-3' />
              <img src={medium} alt="medium icon" className='me-3' />
              <img src={angellist} alt="angellist icon" />
            </p>
          </div>
        </div> 
      </div>
      <div className='bg-1'>
      </div>
    </div>
  )
}

export default Hero;