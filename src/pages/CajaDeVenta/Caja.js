import "./StyleCaja.css";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';




export default function CajaDeVenta() {
return (
  <Container>
    <Row>
      <Col md={12}>
         <Row>
            <Col> 
             <Form.Group controlId="formGridAddress1">
              <Form.Label></Form.Label>
              <Form.Control placeholder="Código Inmueble" />
            </Form.Group>
          </Col>
            <Col>
            <br></br>
            <br></br>
            <Button variant="success">Buscar</Button>
            </Col>
            <Col></Col>
          </Row>
        <h6>Precio:</h6>
        <h6>Código de inmueble:</h6>
        <h6>Tipo:</h6>
        <h6>Ubicación:</h6>
        <h6>Antiguedad:</h6>
        <h6>Tipo:</h6>
        <h6>Elemento:</h6>
        <h6>Servircios:</h6>
     
        <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Datos del Propietario
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Tipo de cliente: Moroso</Card.Body>
    </Accordion.Collapse>

    <Accordion.Collapse eventKey="0">
      <Card.Body>Número de cliente: 1356724561726</Card.Body>
    </Accordion.Collapse>

    <Accordion.Collapse eventKey="0">
      <Card.Body>Nombre y apellido: Franco Corró</Card.Body>
    </Accordion.Collapse>

    <Accordion.Collapse eventKey="0">
      <Card.Body>DNI: 38657897</Card.Body>
    </Accordion.Collapse>

    <Accordion.Collapse eventKey="0">
      <Card.Body>Teléfono: 3624987987</Card.Body>
    </Accordion.Collapse>

<Accordion.Collapse eventKey="0">
      <Card.Body>Correo electrónico:Francocorro0@gmail.com</Card.Body>
    </Accordion.Collapse>

    <Accordion.Collapse eventKey="0">
      <Card.Body>Dirección:Avenida Rivadavia 245</Card.Body>
    </Accordion.Collapse>

  </Card>


  
</Accordion>

        <h6>Opciones de Contrato:</h6>
        
          <hr></hr>
  
           <Row>
           <Col className="one">
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Tipo de venta</Form.Label>
                <Form.Control as="select" defaultValue="Selección...">
                  <option>Selección...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
           </Col>
           <Col>


              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Porcentaje de comisión</Form.Label>
                <Form.Control as="select" defaultValue="Selección...">
                  <option>Selección...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group> 
            </Col>
            <Col><Form.Group as={Col} controlId="formGridState">
                <Form.Label>Forma de pago</Form.Label>
                <Form.Control as="select" defaultValue="Selección...">
                  <option>Selección...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group></Col>
            <Col></Col>
          </Row>

           <Row>
           <Col>
            <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Moneda</Form.Label>
                <Form.Control as="select" defaultValue="Selección...">
                  <option>Selección...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
           </Col>
           <Col>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Precio</Form.Label>
                  <Form.Control />
                </Form.Group> 
            </Col>
            <Col></Col>
            <Col></Col>
          </Row>

          <Row>
            <Col><Button variant="danger">Asentar Pago</Button></Col>
            <Col><a href="http://francocorro0.000webhostapp.com/PagoPorVenta/" target="_blank"><Button variant="success">Imprimir</Button></a></Col>
             </Row>
              <br></br>
      </Col>
    </Row>
  </Container>

  )
}