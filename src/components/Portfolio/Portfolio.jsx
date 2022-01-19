import React from 'react';
import { Row, Col, Card, Container, Badge, Button } from 'react-bootstrap';
import data from '../data.json';

import './Portfolio.css';

export default function Portfolio() {
    return (
        <section id='portfolio'>
            <Container>
                <h3>My Recent Works</h3>
                <Row>
                    {data.map((project, k) => (
                        <Col key={k} xs={12} md={6} lg={4}>
                            <Card>
                                <Card.Img src={project.image} height={250} />
                                <Card.Body className='text-center bg-white'>
                                        <Card.Title className='mb-3'>{project.title}</Card.Title>
                                        <Card.Text>
                                        <div className='portfolio-language mb-3'>
                                        {project.tags.map((tag)=><Badge className='me-2 mb-2'>{tag}</Badge>)}
                                        </div>
                                        <a href={project.repository}><Button className='mb-2'>See Project</Button></a>                                       
                                        </Card.Text>
                                    </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}
