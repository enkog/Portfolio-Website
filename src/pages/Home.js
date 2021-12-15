import React from 'react'
import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Portfolio />
            <About />
            <Contact />
        </div>
    )
}
