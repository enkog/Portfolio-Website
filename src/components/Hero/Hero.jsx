import React from 'react';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import angellist from '../../assets/icons/angellist.svg';
import medium from '../../assets/icons/medium.svg';
import twitter from '../../assets/icons/twitter.svg';

import './Hero.css';

export default function Hero() {
    return (
        <section id="hero" className="container text-center">
            <nav id="portfolio-nav" class="navbar navbar-expand-md navbar-light">
                <div class="container-fluid">
                    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav justify-content-center align-items-center w-100 pri-color">
                        <li class="nav-item">
                          <a class="nav-link active" aria-current="page" href="#portfolio">Portfolio</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

            <div className='main-hero-section row text-center'>
                <h1 classname='col'>
                    <span className='pri-color'>Hey there. I’m Nkiruka.</span><br /> 
                    <span className='sec-color'>I’m a software developer</span>
                </h1>
                <p className='sub-hero-text mt-3 mb-4 col-sm-6'>
                    I can help you build a product, feature or website. Look through some of my work and experience!
                    If you like what you see and have a project you need coded, don't hesitate to contact me.
                </p>
                <ul className='col social-icons d-flex justify-content-center align-items-center'>
                    <li><img src={github} alt='github icon' /></li>
                    <li><img src={linkedin} alt=' linkedin icon' /></li>
                    <li><img src={twitter} alt='twitter icon' /></li>
                    <li><img src={angellist} alt='angellist icon' /></li>
                    <li><img src={medium} alt='medium icon' /></li>
                </ul>   
            </div>
        </section>
    )
}
