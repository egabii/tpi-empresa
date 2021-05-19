
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useHistory } from "react-router-dom";
import {useState} from 'react';

export default function FormDescripcion () {
  let history=useHistory();
  function handleClick(){
    history.push("/NuevaPropiedad/Descripcion")
  }
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      handleClick()
    }
    setValidated(true);
  };
  return (
    <div>
      <NuevaPropiedad/>
      <Form required>
        <Form.Row className="form-row">
          <Col md={5} className="my-1">
          <Form.Group controlId="nroCliente">
            <Form.Label>Titulo</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          </Col>
          <Col md={3} className="my-1">
          <Form.Group controlId="TipoCliente">
            <Form.Label>Precio</Form.Label>
            <Form.Control type="number" min="0">
            </Form.Control>
          </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row className="form-row">
          <Col md={3}>
          <Form.Group controlId="dniCliente">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="text" placeholder="33091229" />
          </Form.Group>
          </Col>
          <Col md={3}>
          <Form.Group controlId="email">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="email" placeholder="ejemplo@ejemplo.com" />
          </Form.Group>
          </Col>
          <Col md={3}>
          <Form.Group controlId="direccion">
            <Form.Label>Direccion</Form.Label>
            <Form.Control type="text" placeholder="ejemplo@ejemplo.com" />
          </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row className='form-row-start'>
          <Col md={3}>
            <Form.Group controlId="tipoContrato">
              <Form.Label>Tipo de Contrato</Form.Label>
              <Form.Control as="select">
                <option>Venta</option>
                <option>Alquiler</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
        <div className="btn-desplazo">
          <Link to= '/NuevaPropiedad/Ubicacion'><Button>Anterior</Button></Link>
          <Link to='/NuevaPropiedad/AgregarMultimedia'><Button>Siguiente</Button></Link>
        </div>
      </Form>
    </div>
  );
};


export  function NuevaPropiedad() {
  return (
    <>
    <h1>Nueva Propiedad</h1>
    <h3>Ingresar datos</h3>
    <Tabs defaultActiveKey="descripcion"  id="uncontrolled-tab-example">
      <Tab eventKey="propietario" title="Propietario" disabled>
      </Tab>
      <Tab eventKey="ubicacion" title="Ubicacion" disabled>
      </Tab>
      <Tab eventKey="descripcion" title="Descripcion">
      </Tab>
      <Tab eventKey="multimedia" title="Multimedia" disabled>
      </Tab>
    </Tabs>
    </>
  );
}