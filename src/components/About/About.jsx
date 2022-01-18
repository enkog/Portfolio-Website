import React from 'react';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';
import language from '../../assets/icons/language.svg';
import framework from '../../assets/icons/framework.svg';
import skills from '../../assets/icons/skills.svg';
import { languages, frameworks, otherSkills } from '../skills';

import './About.css';

export default function About() {
    return (
        <section id='about'>
            <Container>
                <div className='row justify-content-center align-items-center flex-column text-center mb-3'>
                    <h3 className='col'>About</h3>
                    <p className='col-sm-8 about-text'>
                        I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.
                    </p>
                    
                </div>
                <div className='mb-5 text-center'>
                <a href='https://drive.google.com/file/d/17QqM5MpfoIq-_Y-x2QiDimdsTBbth2dH/view?usp=sharing'><Button>See My Resume</Button></a>
                </div>
                
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card>
                        <Card.Img variant="top" src={language} />
                        <Card.Body className='text-center'>
                            <Card.Title className='mb-3'>Languages</Card.Title>
                            <Card.Text>
                              <div className='portfolio-language mb-3'>
                                  {languages.map((skills)=><Badge className='me-2 mb-2'>{skills}</Badge>)}
                              </div>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Card.Img variant="top" src={framework} />
                        <Card.Body className='text-center'>
                            <Card.Title className='mb-3'>Frameworks</Card.Title>
                            <Card.Text>
                              <div className='portfolio-language mb-3'>
                              {frameworks.map((skills)=><Badge className='me-2 mb-2'>{skills}</Badge>)}
                              </div>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                        <Card.Img variant="top" src={skills} />
                        <Card.Body className='text-center'>
                            <Card.Title className='mb-3'>Skills</Card.Title>
                            <Card.Text>
                              <div className='portfolio-language mb-3'>
                              {otherSkills.map((skill)=><Badge className='me-2 mb-2'>{skill}</Badge>)}
                              </div>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
