import React from 'react'
import { Link } from 'react-router-dom';
function FiltroPropiedades() {
    return (
        <div style={{marginTop:'25px'}}>
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                  <label for="validationCustom01" class="form-label">Provincia</label>
                  <select class="form-select" id="validationCustom04" required>
                    <option>Todos</option>
                    <option>Buenos Aires</option>
                    <option>Capital Federal</option>
                    <option>Catamarca</option>
                    <option>Chaco</option>
                    <option>Chubut</option>
                    <option>Córdoba</option>
                    <option>Corrientes</option>
                    <option>Entre Ríos</option>
                    <option>Formosa</option>
                    <option>Jujuy</option>
                    <option>La Pampa</option>
                    <option>La Rioja</option>
                    <option>Mendoza</option>
                    <option>Misiones</option>
                    <option>Neuquén</option>
                    <option>Río Negro</option>
                    <option>Salta</option>
                    <option>San Juan</option>
                    <option>San Luis</option>
                    <option>Santa Cruz</option>
                    <option>Santa Fe</option>
                    <option>Santiago del Estero</option>
                    <option>Tierra del Fuego</option>
                    <option>Tucumán</option>
                  </select>
                  <div class="valid-feedback">
                      Looks good!
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label">Tipo</label>
                  <select class="form-select" id="validationCustom04" required>
                    <option>Todos</option>
                    <option>Departamento</option>
                    <option>Casa</option>
                    <option>Chalet</option>
                    <option>Local</option>
                    <option>Casa con local</option>
                    <option>Cabaña</option>
                    <option>Cochera</option>
                  </select>
                  <div class="valid-feedback">
                    Looks good!
                  </div>
                </div>
                <div class="col-md-4">
                  <label for="validationCustom02" class="form-label">Estado</label>
                  <select class="form-select" id="validationCustom04" required>
                    <option>Todos</option>
                    <option>En venta</option>
                    <option>En alquiler</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="validationCustom03" class="form-label">Ciudad</label>
                  <input placeholder = "Todas" type="text" class="form-control" id="validationCustom03"/>
                  <div class="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom05" class="form-label"></label>
                  <input type="text" placeholder="Buscar por palabra clave" class="form-control codinm" id="validationCustom05"/>
                  <div class="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
                <div class="col-md-3">
                  <label for="validationCustom05" class="form-label"></label>
                  <input type="text" placeholder="Codigo inmueble" class="form-control codinm" id="validationCustom05"/>
                  <div class="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
                <div class="col-12 enviar">
                  <Link to="/NuevaPropiedad/Propietario"> <button class="btn btn-success">Nueva Propiedad </button> </Link>
                  <Link to="/propiedades">
                    <button class="btn btn-success">Buscar</button> 
                  </Link>
                  
                </div>
            </form>
        </div>
    )
};

export default FiltroPropiedades
