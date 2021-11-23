import {useState} from 'react'
//add task form
const AddReunion = ({onAdd}) => {
    const [text, setText] = useState ('')
    const [day, setDay] = useState ('')
    const [reminder, setReminder] = useState (false)

    const onSubmit = (e) => { 
        e.preventDefault()
        if (!text) { 
            alert('Please add task')
            return
        }
        onAdd({text,day,reminder})
        setText('')
        setDay('')
        setReminder(false)
    } 

    return (
        <form className = 'add-form' onSubmit={onSubmit}>
            <div classname = 'form-control'> 
                <label>Task</label>
                <input type= 'text ' placeholder = 'Add Task' value = {text} 
                onChange = {(e) => setText(e.target.value)}></input>
            
            </div>
            <div classname = 'form-control'> 
                <label>Dia y Hora</label>
                <input type= 'text ' placeholder = 'Day & Time'
                onChange = {(e) => setDay(e.target.value)}></input>
            
            </div>
            <div classname = 'form-control form-control-check'> 
                <label>set reminder</label>
                <input type= 'checkbox'
                checked = {reminder} 
                value = {reminder}
                onChange = {(e) => setReminder(e.currentTarget.value)}/>

            </div>
            <input type ='submit' value = 'Save  task' className = 'btnSubmit btn-block'/>
        </form>
    )
}

export default AddReunion