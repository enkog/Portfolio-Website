import React from 'react';
import { Row, Col, Card, Container, Badge, Button } from 'react-bootstrap';
import lifestyle from '../../assets/images/lifestyle.png';
import ticTacToe from '../../assets/images/tic-tac-toe.png';
import metrics from '../../assets/images/metrics.png';
import pokemon from '../../assets/images/pokemon.png';
import todoList from '../../assets/images/todo-list.png';

import './Portfolio.css';


export default function Portfolio() {
    const projects = [ lifestyle, ticTacToe, metrics, pokemon, todoList, todoList ];
    return (
        <section id='portfolio'>
            <Container>
                <h3>My Recent Works</h3>

                <Row>
          {projects.map((project, k) => (
              <Col key={k} xs={12} md={6} lg={4}>
                  <Card>
                      <Card.Img src={project} height={250} />
                      <Card.Body className='text-center bg-white'>
                            <Card.Title className='mb-3'>Multi-Post Stories Gain+Glory</Card.Title>
                            <Card.Text>
                              <div className='portfolio-language mb-3'>
                                  <Badge className='me-2'>html</Badge>
                                  <Badge className='me-2'>html</Badge>
                                  <Badge className='me-2'>html</Badge>
                                  <Badge className='me-2'>html</Badge>
                              </div>
                              <Button className='mb-2'>See Project</Button>
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
