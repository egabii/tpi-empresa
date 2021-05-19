import React from 'react'
import "./Cliente.css"

export default function ListarClientes() {
    return (
        <div>
            <div>
                <h2>Listado de Clientes</h2>
                <hr/>
                <Buscador/>
            </div>
            <div>
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">DNI</th>
                            <th scope="col">Correo</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Documentacion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark tylor</td>
                            <td>40547880</td>
                            <td>3777909828</td>
                            <td>mark@gmail.com</td>
                            <td><button type="button" class="btn btn-sm btn-outline-success">Ver</button></td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Larry the Bird</td>
                            <td>89010481</td>
                            <td>39103393</td>
                            <td>larry@gmail.com</td>
                            <td><button type="button" class="btn btn-sm btn-outline-success">Ver</button></td>      
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                            <td>Leonardo Diaz</td>
                            <td>42848183</td>
                            <td>35184851</td>
                            <td>leo_diaz@gmail.com</td>
                            <td className="position-btn"><button type="button" class="btn btn-sm btn-outline-success">Ver</button></td> 
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

function Buscador(){
    return(
        <div className="buscador">
            <form class="search-container">
                <input type="text" id="search-bar" placeholder="What can I help you with today?"/>
                <a href="#"><img class="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
            </form>
        </div>
    )
}