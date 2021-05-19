import { Link } from 'react-router-dom';
import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import './Cliente.css'

export default function AñadirCliente() {
    
    return (
        <div>
            <div>
                <h1>Añadir cliente</h1>
            </div>
            <Tabs defaultActiveKey="cliente-particular"  id="uncontrolled-tab-example">
                <Tab eventKey="cliente-particular" title="Cliente Particular">
                    <ClienteParticular/>
                </Tab>
                <Tab eventKey="cliente-corporativo" title="Cliente Corporativo">
                    <ClienteCorporativo/>
                </Tab>
            </Tabs>
        </div>
    );
}



function ClienteParticular() {
    return (
        <div>
            <form class="row g-3 needs-validation formPart" novalidate>
                <div class="col-md-2">
                    <fieldset disabled>
                        <label for="disabledTextInput" class="form-label">Codigo</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="XXXXXX"/>
                    </fieldset>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="validationCustom01" required/>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="validationCustom02" required/>
                </div>
                <div class="col-md-3">
                    <label for="validationCustomUsername" class="form-label">DNI</label>
                    <div class="input-group has-validation">
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom03" class="form-label">Email</label>
                    <input type="email" class="form-control" id="validationCustom03" required/>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom04" class="form-label">CUIL/CUIT</label>
                    <input type="text" class="form-control" id="validationCustom03" required/>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom05" class="form-label">Fecha de Nacimiento</label>
                    <input type="date" class="form-control" id="validationCustom05" required/>
                </div>
                <div class="col-md-3">
                    <label for="validationCustom05" class="form-label">Telefono</label>
                    <input type="text" class="form-control" id="validationCustom05" required/>
                </div>
                <div class="col-md-1 btn-confirmar">
                    <Link to='/Documentacion'><button class="btn btn-primary" type="submit">Confirmar</button></Link>
                </div>
            </form>
        </div>
    )
}

function ClienteCorporativo() {
    return (
        <div>
            <form class="row g-3 needs-validation formcorp" novalidate>
                <div class="col-md-2">
                    <fieldset disabled>
                        <label for="disabledTextInput" class="form-label">Codigo</label>
                        <input type="text" id="disabledTextInput" class="form-control" placeholder="XXXXXX"/>
                    </fieldset>
                </div>
                <div class="col md-4">
                    <label for="validationCustom01" class="form-label">Razon Social</label>
                    <input type="text" class="form-control" id="validationCustom01" required/>
                </div>
                <div class="col md-2">
                    <label for="validationCustom02" class="form-label">CUIT</label>
                    <input type="text" class="form-control" id="validationCustom02" required/>
                </div>
                <h3>Datos Propietario</h3>
                <hr/>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Nombre</label>
                    <input type="text" class="form-control" id="validationCustom01" required/>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Apellido</label>
                    <input type="text" class="form-control" id="validationCustom02" required/>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Direccion</label>
                    <input type="text" class="form-control" id="validationCustom02" required/>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom05" class="form-label">Telefono</label>
                    <input type="text" class="form-control" id="validationCustom05" required/>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom03" class="form-label">Email</label>
                    <input type="email" class="form-control" id="validationCustom03" required/>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom03" class="form-label">Agente Inmobiliario a cargo</label>
                    <input type="text" class="form-control" id="validationCustom03" required/>
                </div>
                <div class="col-md-1 btn-confirmar">
                    <Link to='/Documentacion'><button class="btn btn-primary" type="submit">Confirmar</button></Link>
                </div>
            </form>
        </div>
    )
}
