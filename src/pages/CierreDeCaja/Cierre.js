import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import {Link} from 'react-router-dom'




export default function CierreDeCaja() {
return (
  <Container>
    <Row>
      <Col md={12}>
                   
                      <Row>
                      <Col>
                      <br></br>
                      <br></br>
                      <h1>Cierre de Caja</h1>
                      </Col>
                       <Col>
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label></Form.Label>
                            <Form.Control as="select" defaultValue="Mes">
                              <option>Mes</option>
                              <option>Enero</option>
                              <option>Febrero</option>
                              <option>Marzo</option>
                              <option>...</option>
                            </Form.Control>
                            </Form.Group>
                            </Col>
                            <Col>
                            <Form.Group as={Col} controlId="formGridState">
                            <Form.Label></Form.Label>
                            <Form.Control as="select" defaultValue="Año">
                              <option>Año</option>
                              <option>2.021</option>
                               <option>2.020</option>
                                <option>2.019</option>
                                 <option>...</option>
                            </Form.Control>
                            </Form.Group>
                            </Col>
                          </Row>
                          <hr></hr>
                          <Nav variant="pills" defaultActiveKey="#first">
                          <Nav.Item>
                            <Nav.Link href="#first">Caja de Venta</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link href="#link">Caja de Alquiler</Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link href="#disabled" disabled>
                              <h3>ÚLTIMOS MOVIMIENTOS</h3>
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>

                        <hr></hr>

                          <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Hora</th>
                              <th>Entrada</th>
                              <th>Ingreso</th>
                             
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>16 mins</td>
                              <td>Mark</td>
                              <td>$ 22.345</td>
                             
                            </tr>
                            <tr>
                              <td>20 mins</td>
                              <td>Jacob</td>
                              <td>$ 28.565</td>
                              
                            </tr>
                            <tr>
                              <td>54 mins</td>
                              <td colSpan="2">Bird</td>
                           
                              
                            </tr>
                          </tbody>
                        </Table>

                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Hora</th>
                              <th>Salida</th>
                              <th>Egreso</th>
                             
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>11 mins</td>
                              <td>Mark</td>
                              <td>$ 22.345</td>
                             
                            </tr>
                            <tr>
                              <td>23 mins</td>
                              <td>Jacob</td>
                              <td>$ 28.565</td>
                              
                            </tr>
                            <tr>
                              <td>34 mins</td>
                              <td colSpan="2">Larryd</td>
                              
                            </tr>
                          </tbody>
                        </Table>

                        <h4>Total de Ingresos:$ 4.443,33</h4>
                         <h4>Total de Egresos:$ 38.443</h4>
                         <hr></hr>
                         <h3>TOTAL GENERAL:$ 342.342,33</h3>
                          <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col><Button variant="danger">Confirmar operación</Button></Col>
                        <Col><a href ="http://francocorro0.000webhostapp.com/CierreDeCaja" target="_blank"><Button variant="success">Imprimir Balance </Button></a></Col>
                         </Row>
                         <hr></hr>

              </Col>
            </Row>
          </Container>
  )
}