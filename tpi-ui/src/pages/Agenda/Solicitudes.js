import React from 'react'
import Popup from "./PopupSolicitud";
import {useState} from 'react'
import {Link} from 'react-router-dom'

function Solicitudes() {
    const [buttonPopup, setbuttonPopup] = useState(false);
    return (
        <div>
            <div className="header">
                <h1>Solicitudes</h1>
            </div>
            <div className ="body">
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Horario</th>
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td><btn onClick = {() => setbuttonPopup(true)}class="btn btn-primary">Ver solicitud</btn></td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                            <btn onClick = {() => setbuttonPopup(true)} class="btn btn-primary">Ver solicitud</btn>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                        <td>
                            <btn onClick = {() => setbuttonPopup(true)} class="btn btn-primary">Ver solicitud</btn>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setbuttonPopup}>
                <DatosSolicitud></DatosSolicitud>
            </Popup>
        </div>
    )
}

export default Solicitudes


function DatosSolicitud() {
    return(
    <div>
        <div>
            <h2>Larry the Bird</h2>
            <hr/>
        </div>
        <div className="body">
            <h5>Tipo cliente: No registrado</h5>
            <h5>Asunto: Conocer propiedad</h5>
            <h5>Correo electronico: larrybird@gmail.com</h5>
            <h5>Telefon: 3777257042</h5>
            <h5>Fecha solicitud: 25/05/2021 a las 19:38</h5>
            <h5>Codigo Propiedad: 183</h5>
            <h5>Comentario: que se yo</h5>
            <button class="close" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <Link to="/agenda"><btn class="btn btn-success">Asignar agente</btn></Link>
            
        </div>
    </div>
    )
}
