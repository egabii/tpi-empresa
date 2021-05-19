import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Imagenes from "./CajaImagen";
import "./estiloimagen.css"
export default function AgregarMultimedia() {
  return (
  <>
    <NuevaPropiedad/>
    <Imagenes />
    <div className="btn-desplazo">
      <Link to= '/NuevaPropiedad/Descripcion'><Button>Anterior</Button></Link>
      <Link to= '/propiedades'><Button>Siguiente</Button></Link>
    </div>
  </>
  );
}
export  function NuevaPropiedad() {
  return (
    <>
    <h1>Nueva Propiedad</h1>
    <h3>Ingresar datos</h3>
    <Tabs defaultActiveKey="multimedia"  id="uncontrolled-tab-example">
      <Tab eventKey="propietario" title="Propietario" disabled>
      </Tab>
      <Tab eventKey="ubicacion" title="Ubicacion" disabled>
      </Tab>
      <Tab eventKey="descripcion" title="Descripcion" disabled>
      </Tab>
      <Tab eventKey="multimedia" title="Multimedia">
      </Tab>
    </Tabs>
    </>
  );
}