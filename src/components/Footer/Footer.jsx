import React from 'react'
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import angellist from '../../assets/icons/angellist.svg';
import medium from '../../assets/icons/medium.svg';
import twitter from '../../assets/icons/twitter.svg';

export default function Footer() {
    return (
        <footer className='pt-2 mt-5'>
            <hr />
            <ul className='social-icons d-flex justify-content-center align-items-center'>
            <li><a href='https://github.com/enkog'><img src={github} alt='github icon' /></a></li>
            <li><a href='https://www.linkedin.com/in/enkog/'><img src={linkedin} alt=' linkedin icon' /></a></li>
            <li><a href='https://twitter.com/enkodes'><img src={twitter} alt='twitter icon' /></a></li>
            <li><a href='https://angel.co/u/nkiruka-oguadinma'><img src={angellist} alt='angellist icon' /></a></li>
            <li><a href='https://medium.com/@nkirukaogu'><img src={medium} alt='medium icon' /></a></li>
            </ul> 
        </footer>
    )
}
