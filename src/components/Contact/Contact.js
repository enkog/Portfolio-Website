import { Container, Row, Col } from 'react-bootstrap';
import github from '../../assets/icons/github2.png';
import linkedin from '../../assets/icons/linkedin2.png';
import angellist from '../../assets/icons/angellist2.png';
import medium from '../../assets/icons/medium2.png';
import '../Contact/Contact.css';

const Contact = () => {
  return (
    <section className='contact-section text-white pt-5 pb-3 text-center' id='contact'>
      <Container>
        <h3 className='mb-4'>Interested in collaborating?</h3>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <p className='mb-4'>
              If you have an application you are interested in developing, a feature that you need built or a project that need coding, I’d love to help with it.
            </p>
          </Col>
        </Row>
        <p>nkirukaogu@gmail.com</p>
        <p className='mb-5'>
          <img src={github} alt="github icon" className='me-3 text-white' />
          <img src={linkedin} alt="linkedin icon" className='me-3' />
          <img src={medium} alt="medium icon" className='me-3' />
          <img src={angellist} alt="angellist icon" />
        </p>
        <hr />
        <footer className='pt-3'>
          <p>© 2021 Oguadinma Nkiruka</p>
        </footer>
      </Container>
    </section>
  )
}

export default Contact;