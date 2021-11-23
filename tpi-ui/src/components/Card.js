import { Link } from "react-router-dom";
import PropiedadUnitaria from "../pages/Propiedades/PropiedadUnitaria";
import Image from 'react-bootstrap/Image';
import { Button } from "bootstrap";

export default function Card ({key,titulo, descripcion, imagen,tipo,precio,estado}) {
  return (

    <div class="card mb-3" style={{width:'100vw'}} >
      <div class="row g-0">
        <div class="col-md-4" >
          <Link to='/PropiedadUnitaria'>
              <Image src={imagen} fluid />
          </Link>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{titulo}</h5>
            <p class="card-text">{descripcion}</p>
            <p class="card-text">{precio}</p>
            <p class="card-text">{tipo}</p>
            <p class="card-text"><h5><span class="badge bg-success">{estado}</span></h5></p>
          </div>
        </div>
      </div>
    </div>
  )
}