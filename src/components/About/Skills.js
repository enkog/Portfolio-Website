import { Badge } from 'react-bootstrap';

const frontend = ['JavaScript', 'React', 'Redux', 'HTML5', 'CSS3', 'Sass', 'Bootstrap',  'Ruby'];
const backend = ['Ruby on Rails', 'MySQL'];
const otherSkills = ['Git', 'GitHub', 'RSpec', 'Capybara', 'Jest', 'Heroku', 'Netlify', 'TDD', 'Chrome Dev Tools'];
const professionalSkills = ['Remote Pair Programming', 'Teamwork', 'Mentoring'];

const Skills = () => {
  return (
    <div>
      <h5>Frontend</h5>
      {frontend.map((skill) => <Badge text="dark">{skill}</Badge>)}

      <h5 className='my-3'>Backend</h5>
      {backend.map((skill) => <Badge text="dark">{skill}</Badge>)}

      <h5 className='my-3'>Other Skills</h5>      
      {otherSkills.map((skill) => <Badge text="dark">{skill}</Badge>)}

      <h5 className='my-3'>Professional</h5>
      {professionalSkills.map((skill) => <Badge text="dark">{skill}</Badge>)}
    </div>
  )
}

export default Skills;





