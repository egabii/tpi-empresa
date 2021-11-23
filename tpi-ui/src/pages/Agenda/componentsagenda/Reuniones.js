import {useState} from 'react'
import Reunion from './Reunion'
const Reuniones = ({reuniones, onDelete,onToggle}) => {
   

    return (
        <div>
            {reuniones.map((reunion) => (
                <Reunion key = {reunion.id} reunion = {reunion}
                onDelete = {onDelete}
                onToggle = {onToggle}
                /> 
            ))}
        </div>
    )
}
export default Reuniones