import {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import InputGroup from 'react-bootstrap/Form'
import { useHistory } from "react-router-dom";

export default function FormPropietario () {
  let history=useHistory();
  function handleClick(){
    history.push("/NuevaPropiedad/Ubicacion")
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
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Row className="form-row">
          <Col md={3} className="my-1">
          <Form.Group controlId="validationCustom01">
            <Form.Label>Nro de Cliente</Form.Label>
            <Form.Control type="text" placeholder="Numero de cliente" required/>
          </Form.Group>
          </Col>
          <Col md={3} className="my-1">
          <Form.Group controlId="TipoCliente">
            <Form.Label>Tipo de Cliente</Form.Label>
            <Form.Control as="select" required>
              <option>Corporativo</option>
              <option>Particular</option>
            </Form.Control>
          </Form.Group>
          </Col>
          <Col md={3} className="my-1">
          <Form.Group controlId="nombreCompleto">
            <Form.Label>Nombre y Apellido</Form.Label>
            <Form.Control type="text" placeholder="Nombre completo" required/>
          </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row className="form-row">
          <Col md={3}>
          <Form.Group controlId="dniCliente">
            <Form.Label>DNI</Form.Label>
            <Form.Control type="number" placeholder="33091229" required/>
          </Form.Group>
          </Col>
          <Col md={3}>
          <Form.Group controlId="email">
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="ejemplo@ejemplo.com" required/>
          </Form.Group>
          </Col>
          <Col md={3}>
          <Form.Group controlId="direccion">
            <Form.Label>Direccion</Form.Label>
            <Form.Control type="text" placeholder="Avenida Siempre Viva" required/>
          </Form.Group>
          </Col>
        </Form.Row>
        <Form.Row className='form-row-start'>
          <Col md={3}>
            <Form.Group controlId="tipoContrato">
              <Form.Label>Tipo de Contrato</Form.Label>
              <Form.Control as="select" required>
                <option>Venta</option>
                <option>Alquiler</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
        <div className="btn-siguiente"> 
          <Button type='submit'>Siguiente</Button>
        </div>
      </Form>
    </div>
  );
}


export  function NuevaPropiedad() {
  return (
    <>
    <h1>Nueva Propiedad</h1>
    <h3>Ingresar datos</h3>
    <Tabs defaultActiveKey="propietario"  id="uncontrolled-tab-example">
      <Tab eventKey="propietario" title="Propietario">
      </Tab>
      <Tab eventKey="ubicacion" title="Ubicacion" disabled>
      </Tab>
      <Tab eventKey="descripcion" title="Descripcion" disabled>
      </Tab>
      <Tab eventKey="multimedia" title="Multimedia" disabled>
      </Tab>
    </Tabs>
    </>
  );
}

/*
<NuevaPropiedad/>
<Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Form.Row className="form-row">
    <Col md={3} className="my-1">
    <Form.Group controlId="validationCustom01">
      <Form.Label>Nro de Cliente</Form.Label>
      <Form.Control type="text" placeholder="Numero de cliente" required/>
    </Form.Group>
    </Col>
    <Col md={3} className="my-1">
    <Form.Group controlId="TipoCliente">
      <Form.Label>Tipo de Cliente</Form.Label>
      <Form.Control as="select">
        <option>Corporativo</option>
        <option>Particular</option>
      </Form.Control>
    </Form.Group>
    </Col>
    <Col md={3} className="my-1">
    <Form.Group controlId="nombreCompleto">
      <Form.Label>Nombre y Apellido</Form.Label>
      <Form.Control type="text" placeholder="nombre completo" />
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
          <option>Corporativo</option>
          <option>Particular</option>
        </Form.Control>
      </Form.Group>
    </Col>
  </Form.Row>
  <div className="btn-siguiente"> 
    <Link to='/NuevaPropiedad/Ubicacion'><Button>Siguiente</Button></Link>
  </div>
</Form>

*/