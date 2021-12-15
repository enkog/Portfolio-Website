import React from 'react'

export default function About() {
    return (
        <div className='d-flex justify-content-between'>
            <div>
                <h3>About me</h3>
                <p>
                I am a super self-motivated software engineer with great learning abilities and a desire to always exceed expected results. I am willing, open, and ready to accept opportunities tailored at providing an ever progressive career experience and global exposure with both challenging and rewarding roles.
                </p>
                <p>
                Look through some of my work and experience! If you like what you see and have project you need coded, don’t hesistate to contact me.
                </p>
                <button type='button'>Get my Resume</button>
            </div>
            <div className='w-100'>
                <h5>Frontend</h5>
                <p>
                JavaScript (ES5/ES6)
                React
                Redux
                HTML5
                CSS3
                Sass
                Bootstrap
                Mobile/Responsive Development
                Ruby
                </p>
                <h5>Backend</h5>
                <p>
                Ruby on Rails  MySQL
                </p>
                <h5>Other Skills</h5>
                <p>
                Git
                GitHub
                RSpec
                Capybara
                Jest
                Heroku
                Netlify
                TDD
                Chrome Dev Tools
                </p>
                <h5>Professional</h5>
                <p>
                Remote Pair Programming
                Teamwork
                Mentoring
                </p>
            </div>
        </div>
    )
}
