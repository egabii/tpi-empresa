import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import "./StyleReporte.css";



export default function NuevoReporte() {
return (



  <Container>
  <h1>Reportes de Transacciones</h1>
    <Row>
      <Col md={12}>
                      <Row>
                      <Col>
                      <br></br>
                      <br></br>
                    
                      </Col>


                      <Col></Col>
                      <Col></Col>
                      <Col></Col>
                       <Col></Col>
                     
                       
                        <Form.Group controlId="formGridState">
                            <Form.Label>Inicio</Form.Label>
                            <Form.Control as="select" defaultValue="Fecha de inicio">
                              <option>Mes</option>
                              <option>Enero</option>
                              <option>Febrero</option>
                              <option>Marzo</option>
                              <option>...</option>
                            </Form.Control>
                            </Form.Group>
                            
                            
                            <Form.Group controlId="formGridState">
                            <Form.Label></Form.Label>
                            <Form.Control as="select" defaultValue="Fecha de fin">
                              <option>Año</option>
                              <option>2021</option>
                               <option>2020</option>
                                <option>2019</option>
                                 <option>...</option>
                            </Form.Control>
                            </Form.Group>
                            
                          </Row>
                         

                    <Row>
                        <Col>
                            <br></br>
                            <br></br>
                        </Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                            <Form.Group  controlId="formGridState">
                                <Form.Label>Fin</Form.Label>
                                <Form.Control as="select" defaultValue="Fecha de inicio">
                                    <option>Mes</option>
                                    <option>Enero</option>
                                    <option>Febrero</option>
                                    <option>Marzo</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formGridState">
                                <Form.Label></Form.Label>
                                <Form.Control as="select" defaultValue="Fecha de fin">
                                    <option>Año</option>
                                    <option>2021</option>
                                    <option>2020</option>
                                    <option>2019</option>
                                </Form.Control>
                            </Form.Group>
                                
                    </Row>
                          <hr></hr>



                          <Form>
                            {['checkbox'].map((type) => (
                              <div key={`inline-${type}`} className="mb-3">
                                <Form.Check inline label="Caja de Alquileres" name="group1" type={type} id={`inline-${type}-1`} />
                                <Form.Check inline label="Caja de Ventas" name="group1" type={type} id={`inline-${type}-Entrada/Salida`} />
                                <Form.Check
                                  inline
                                  disabled
                                  label="Entrada/Salida"
                                  type={type}
                                  id={`inline-${type}-3`}
                                />
                              </div>
                            ))}
                          </Form>





           


                        <Table striped bordered hover variant="dark">

                          <thead className="dos">
                            <tr>
                              <th>Hora</th>
                              <th>Entrada/Salida</th>
                              <th>Caja</th>
                              <th>Egreso/Ingreso</th>
                              
                            </tr>
                          </thead>
                          <tbody className="tres">
                            <tr>
                              <td>15:30</td>
                              <td>Salida</td>
                              <td>Alquiler</td>
                              <td>2500</td>

                            </tr>
                            <tr>
                              <td>21:15</td>
                              <td>Entrada</td>
                              <td>Venta</td>
                              <td>-5000</td>
                            </tr>
                            <tr>
                              <td>21:15</td>
                              <td>Entrada</td>
                              <td>Alquiler</td>
                              <td>-1800</td>
                            </tr>
                             <tr>
                              <td>...</td>
                              <td>...</td>
                              <td>...</td>
                              <td>...</td>
                            </tr>
                          </tbody>
                       </Table>



                         <p><h5>Total de Ingresos:</h5>$25.443</p>
                        
                         <p><h5>Total de Egresos:</h5>$ 38.443</p>
                         
                         <h4><strong>TOTAL GENERAL:</strong> <em>$342.342,33</em></h4>
                          
                         <hr></hr>
                          <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col className="cuatro"><Button variant="danger">Confirmar operación</Button></Col>
                        <Col className="cuatro"><a href="http://francocorro0.000webhostapp.com/NuevoReporte/"><Button variant="success">Imprimir Balance </Button></a></Col>
                         </Row>
                        





              </Col>
            </Row>
          </Container>
  )
}