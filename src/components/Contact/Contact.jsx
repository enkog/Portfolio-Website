import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

import './Contact.css';
export default function Contact() {
    return (
        <section id='contact'>
            <Container>
                <Row className='justify-content-between'>
                    <Col sm={12} md={4} className=' contact-text mb-3'>
                        I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
                    </Col>
                    <Col sm={12} md={6} className='justify-self-end'>
                        <Form>
                            <Form.Group as={Row} className="mb-4">
                                <Col><Form.Control placeholder="First name" /></Col>
                                <Col><Form.Control placeholder="Last name" /></Col>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control type="email" placeholder="Email address" />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control as="textarea" placeholder="Typing something" rows={4} />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Button type="submit">Get in touch</Button>
                            </Form.Group>
                        </Form>  
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
