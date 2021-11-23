import React from 'react'
//icono de cerrar
import {FaTimes} from 'react-icons/fa'
const Reunion = ({reunion, onDelete, onToggle}) => {
    return (
        <div className = {`reunion ${reunion.reminder ? 'reminder' : ' ' }`} 
        onDoubleClick={() => onToggle(reunion.id)}>
            <h6>{reunion.text}<FaTimes style= {{color:'red', cursor:'pointer'}} onClick={() => onDelete(reunion.id)}/></h6>
            <p>{reunion.day}    
            </p>
        </div>
    )
}

export default Reunion