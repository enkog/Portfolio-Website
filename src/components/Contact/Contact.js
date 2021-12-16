import React from 'react'
import {Row, Col, FloatingLabel, Form, Button} from 'react-bootstrap';
import github from '../../assets/icons/github.png';
import linkedin from '../../assets/icons/linkedin.png';
import angellist from '../../assets/icons/angellist.png';
import medium from '../../assets/icons/medium.png';
import '../Contact/Contact.css';

export default function Contact() {
    return (
        <div className='contact-section text-center'>
            <h3>Interested in collaborating?</h3>
            <p>
            If you have an application you are interested in developing, a feature that you need built or a project that need coding, I’d love to help you with it.
            </p>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Name">
                    <Form.Control type="text" placeholder="John" />
                    </FloatingLabel>
                </Col>
                <Col md>
                    <FloatingLabel controlId="floatingInputGrid" label="Email address">
                    <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="g-2">
                <Col md>
                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <Form.Group as={Row} className="mb-3">
                <Col md>
                    <Button type="submit">Get in Touch</Button>
                </Col>
            </Form.Group>
            <Row>
                <Col>
                    <p>nkirukaogu@gmail.com</p>
                    <p>
                        <img src={github} alt="github icon" className='me-3' />
                        <img src={linkedin} alt="linkedin icon" className='me-3' />
                        <img src={medium} alt="medium icon" className='me-3' />
                        <img src={angellist} alt="angellist icon" />
                    </p>
                </Col>
            </Row>
            <footer class="py-3">
    <p class="nav justify-content-center border-top pb-3 mb-3">
      © 2021 Oguadinma Nkiruka
    </p>
  </footer>
        </div>
    )
}
