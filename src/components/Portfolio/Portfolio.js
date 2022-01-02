import { Container, Row, Col, Card } from 'react-bootstrap';
import lifestyle from '../../assets/images/lifestyle.png';
import todo from '../../assets/images/todo-list.PNG';
import pokemon from '../../assets/images/pokemon.png';
import metrics from '../../assets/images/metrics.png';
import '../Portfolio/Portfolio.css';

export default function Portfolio() {
    const data1 = [lifestyle, todo];
    const data2 = [pokemon, metrics,3];
  return (
    <section className='portfolio-section' id='portfolio'>
      <Container id='portfolio' >
        <h3 className='mb-5 text-white'>My recent works</h3>
            
        <Row className='mb-3'>
          {data1.map((data, k) => (
              <Col key={k} xs={12} md={6} lg={6}>
                  <Card >
                      <Card.Img src={data} height={380} />
                  </Card>
              </Col>
          ))}
        </Row>
            
        <Row>
          {data2.map((data, k) => (
              <Col key={k} xs={12} md={6} lg={4}>
                  <Card >
                      <Card.Img src={data} height={300} />
                  </Card>
              </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
