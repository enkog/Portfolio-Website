import { Container, Row, Col, Image } from 'react-bootstrap';
import Social from '../Social';
import profile from '../../assets/images/profile.svg';
import '../Hero/Hero.css';

const Hero = () => {
  return (
    <Container>
      <section className="hero-section" id="intro">
        <Row className="justify-content-between align-items-start h-100">
          <Col sm={12} md={12} lg={6}>
            <div>
              <h1>Pretty code by ingenious person</h1>
              <p className='gray-text'>
                Hello I am a software developer! I can help you build a product, feature or website. Look through some of my work and experience! If you like what you see and have project you need coded, don’t hesistate to contact me.
              </p>
              <Social />
            </div>
          </Col>
          <Col lg={6} className='d-none d-lg-block text-end'>
            <Image src={profile} alt='profile picture' width={300} height={300} />
          </Col>
        </Row>
      </section>
    </Container>
  )
}

export default Hero;