import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import FormPropietario from '../../components/FormularioPropietario';
import FormUbicacion from '../../components/FormularioUbicacion';
import FormDescripcion from '../../components/FormularioDescripcion';
import AgregarMultimedia from './NuevaPropiedad/AgregarMultimedia';
export default function NuevaPropiedad() {
  return (
    <>
    <h1>Nueva Propiedad</h1>
    <h3>Ingresar datos</h3>
    <Tabs defaultActiveKey="propietario"  id="uncontrolled-tab-example">
      <Tab eventKey="propietario" title="Propietario">
        <FormPropietario ></FormPropietario >
      </Tab>
      <Tab eventKey="ubicacion" title="Ubicacion">
        <FormUbicacion />
      </Tab>
      <Tab eventKey="descripcion" title="Descripcion">
        <FormDescripcion />
      </Tab>
      <Tab eventKey="multimedia" title="Multimedia">
        <AgregarMultimedia />
      </Tab>
    </Tabs>
    </>
  );
}