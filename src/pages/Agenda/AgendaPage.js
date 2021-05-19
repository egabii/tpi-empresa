import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Schedule from './Schedule/Schedule.js'



export default function AgendaPage() {
  return (
    <Container>
      <div className="titulo"><h2 className ="letra-titulo">Tu Agenda</h2></div>
      <Row>
        <Col >  
          <Schedule/>
        </Col>
      </Row>
    </Container>
  );
}