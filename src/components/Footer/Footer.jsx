import React from 'react'
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import angellist from '../../assets/icons/angellist.svg';
import medium from '../../assets/icons/medium.svg';
import twitter from '../../assets/icons/twitter.svg';

export default function Footer() {
    return (
        <footer className='border-top pt-2'>
            <ul className='social-icons d-flex justify-content-center align-items-center'>
                <li><img src={github} alt='github icon' /></li>
                <li><img src={linkedin} alt=' linkedin icon' /></li>
                <li><img src={twitter} alt='twitter icon' /></li>
                <li><img src={angellist} alt='angellist icon' /></li>
                <li><img src={medium} alt='medium icon' /></li>
            </ul> 
        </footer>
    )
}
