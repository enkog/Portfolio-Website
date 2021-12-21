import {Container} from 'react-bootstrap';
import github from '../../assets/icons/github2.png';
import linkedin from '../../assets/icons/linkedin2.png';
import angellist from '../../assets/icons/angellist2.png';
import medium from '../../assets/icons/medium2.png';
import '../Contact/Contact.css';

const Contact = () => {
  return (
    <div className='contact-section text-center text-white pt-5' id='contact' >
      <Container className='d-flex flex-column justify-content-center align-items-center'>
        <h3 className='mb-4'>Interested in collaborating?</h3>
        <p className='mb-4'>
          If you have an application you are interested in developing, a feature that you need built or a project that need coding, I’d love to help you with it.
        </p>
        <p>nkirukaogu@gmail.com</p>
        <p>
          <img src={github} alt="github icon" className='me-3 text-white' />
          <img src={linkedin} alt="linkedin icon" className='me-3' />
          <img src={medium} alt="medium icon" className='me-3' />
          <img src={angellist} alt="angellist icon" />
        </p>
        <footer class="py-3">
          <p class="nav justify-content-center pb-3 mb-3">
            © 2021 Oguadinma Nkiruka
          </p>
        </footer>
      </Container>
    </div>
  )
}

export default Contact;