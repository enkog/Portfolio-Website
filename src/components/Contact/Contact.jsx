import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';

import './Contact.css';
export default function Contact() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_fcep4y3', 'template_bayohxc', e.target, 'user_rBDn9X0jvAjYGx85klPHB')
          .then((result) => {
              handleShow();
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };
    
    return (
        <section id='contact'>
            <Container>
                <Row className='justify-content-between'>
                    <Col sm={12} md={4} className=' contact-text mb-3'>
                        I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
                    </Col>
                    <Col sm={12} md={6} className='justify-self-end'>
                        <Form onSubmit={sendEmail}>
                            <Form.Group className="mb-4">
                                <Form.Control placeholder="Fullname" name="name" required />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control type="email" placeholder="Email address" name="email" required />
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Control as="textarea" placeholder="Typing something" rows={4} name="message" required />
                            </Form.Group>
                            <Form.Group>
                                <Button type='submit'>Get in touch</Button>
                            </Form.Group>
                        </Form>  
                    </Col>
                </Row>
  
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title className='text-center sec-color'>🎉🎉 Email sent successfully!!!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='text-center fs-5'>Thank you for reaching out🤝. I will definitely be in touch.</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </section>
    )
}
