import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Imagenes from "./CajaImagen";
import "./estiloimagen.css"
export default function AgregarMultimedia() {

  const agregar = async () => {
    //const formulario = {}
    try {
      const response = await fetch('http://localhost:8000/propiedades/', { 
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          propietario: {
            tipo: 'particular',
            nombre_apellido: 'cosme fulanito'
          },
          ubicacion: 'alla nomas'
        })
      });
  
      if (response.ok) {
        const json = await response.json(); // es asincrono
        alert(json);
      }
    } catch(err) {
      console.error(err);
    }
  };
  return (
  <>
    <NuevaPropiedad/>
    <Imagenes />
    <div className="btn-desplazo">
      <Link to= '/NuevaPropiedad/Descripcion'><Button>Anterior</Button></Link>
      <Button onClick={agregar}>Agregar Propiedad</Button>
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