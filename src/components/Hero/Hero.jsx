import React from 'react';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import angellist from '../../assets/icons/angellist.svg';
import medium from '../../assets/icons/medium.svg';
import twitter from '../../assets/icons/twitter.svg';

import './Hero.css';

export default function Hero() {
    return (
        <section id="hero" className="text-center">
            <nav id="portfolio-nav" className="navbar navbar-expand-md navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav justify-content-center align-items-center w-100 pri-color">
                        <li className="nav-item">
                          <a className="nav-link active" aria-current="page" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <div className='main-hero-section row text-center'>
                <h1 classname='col'>
                    <span className='pri-color hero-txt'>Hey there. I’m Nkiruka.</span><br /> 
                    <span className='sec-color hero-txt'>I’m a software developer</span>
                </h1>
                <p className='sub-hero-text mt-3 mb-4 col-sm-6'>
                    I can help you build a product, feature or website. Look through some of my work and experience!
                    If you like what you see and have a project you need coded, don't hesitate to contact me.
                </p>
                <ul className='col social-icons d-flex justify-content-center align-items-center'>
                    <li><a href='https://github.com/enkog'><img src={github} alt='github icon' /></a></li>
                    <li><a href='https://www.linkedin.com/in/enkog/'><img src={linkedin} alt=' linkedin icon' /></a></li>
                    <li><a href='https://twitter.com/enkodes'><img src={twitter} alt='twitter icon' /></a></li>
                    <li><a href='https://angel.co/u/nkiruka-oguadinma'><img src={angellist} alt='angellist icon' /></a></li>
                    <li><a href='https://medium.com/@nkirukaogu'><img src={medium} alt='medium icon' /></a></li>
                </ul>   
            </div>
        </section>
    )
}
