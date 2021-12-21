import { Container, Row, Col, Image } from 'react-bootstrap';
import Social from '../Social';
import profile from '../../assets/images/profile.svg';
import '../Hero/Hero.css';

const Hero = () => {
  return (
    <Container>
      <div className="hero-section" id="intro">
        <Row className="justify-content-between align-items-start h-100">
          <Col sm={6}>
            <div>
              <h1>Pretty code by <br/>ingenious person</h1>
              <p className='gray-text'>
                Hello I am a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have project you need coded, don’t hesistate to contact me.
              </p>
              <div className='socials d-flex justify-content-between'>
                <p className='gray-text'>My works in social networks</p>
                <Social />
              </div>
            </div>
          </Col>
          <Col sm={6} className='d-none d-lg-block text-end'>
            <Image src={profile} alt='profile picture' width={300} height={300} />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Hero;