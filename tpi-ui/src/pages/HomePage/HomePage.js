import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import "./estiloHomePage.css";
import logoIn from "./logoIn.jpeg";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup'
import {Link} from 'react-router-dom'


export default function HomePage(){
  

  return (

    <Container fluid className='bg-home'>
      <Row>
        <Col>
            
            <div className='headerH'>
            <h3>BIENVENIDO, Matias Acosta</h3>
              <Image src={logoIn} rounded className='img-log' />
            </div>
            <div className='Home'>
              <div className='actions'>
              <Card style={{background:'none'}}>
                  <Card.Header style={{background:'#DCDCDC'}}>ULTIMAS ACCIONES</Card.Header>
                  <Card.Body className='bg-tareas' >
                    <Card.Text>
                    <ListGroup variant="flush" >
                      <ListGroup.Item>Cras justo odio</ListGroup.Item>
                      <br />
                      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                      <br />
                    </ListGroup>
                    </Card.Text>
                    <Link to="/nuevaPropiedad">
                      <Button variant="success">Nueva Propiedad</Button>
                    </Link>
                  </Card.Body>
              </Card>
              </div>
              <div className='agenda'>
              <Card className='bg-tareas'>
                  <Card.Header>ULTIMAS ACCIONES</Card.Header>
                  <Card.Body  >
                    <Card.Text>
                      <ListGroup>
                      <ListGroup.Item action variant="info">
                        Venta Realizada
                      </ListGroup.Item>
                      <ListGroup.Item action variant="info">
                        Alquiler Realizado
                      </ListGroup.Item>
                      </ListGroup>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
           
        </Col>

        
      
      </Row>
    </Container>
  

  );
}
//d