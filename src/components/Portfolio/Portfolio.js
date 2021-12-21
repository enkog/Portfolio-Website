import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Portfolio/Portfolio.css';

export default function Portfolio() {
    const data1 = [1,2];
    const data2 = [1,2,3];
  return (
    <Container className='portfolio-section' id='portfolio' >
      <h3 className='mb-5'>My recent works</h3>
      
      <Row className='mb-3'>
        {data1.map((data, k) => (
            <Col key={k} xs={12} md={6} lg={6}>
                <Card >
                    <Card.Img src={data} />
                </Card>
            </Col>
        ))}
      </Row>
      
      <Row>
        {data2.map((data, k) => (
            <Col key={k} xs={12} md={6} lg={4}>
                <Card >
                    <Card.Img src={data} />
                </Card>
            </Col>
        ))}
      </Row>
    </Container>
  )
}
