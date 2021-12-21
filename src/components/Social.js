import github from '../assets/icons/github.png';
import linkedin from '../assets/icons/linkedin.png';
import angellist from '../assets/icons/angellist.png';
import medium from '../assets/icons/medium.png';
import { Row, Col, Image } from 'react-bootstrap';

const Social = () => {
  return (
    <Row className='socials d-flex justify-content-between'>
      <Col sm={12} md={6}><p className='gray-text'>My works in social networks</p></Col>
      <Col sm={12} md={6}>
        <div>
          <a href="https://github.com/enkog">
            <Image src={github} alt="github icon" className='me-3' />
          </a>
          <a href="https://www.linkedin.com/in/enkog/">
            <Image src={linkedin} alt="linkedin icon" className='me-3' />
          </a>
          <a href="https://medium.com/@nkirukaogu">
            <Image src={medium} alt="medium icon" className='me-3' />
          </a>
          <a href="https://angel.co/u/nkiruka-oguadinma">
            <Image src={angellist} alt="angellist icon" />
          </a>
        </div>
      </Col>
    </Row>
  )
}

export default Social;