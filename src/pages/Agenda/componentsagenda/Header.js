
import Button from './Button'

const Header = ({title,onAdd,showAdd}) => {   
    return (
        <header className = 'header'>
            <h3>AGENDA HOY</h3>
            <Button color ={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'}onClick = {onAdd} />
            
        </header>
    )
}



/* CSS EN JS
const headingStyle = { 
    color: 'red',
    backgroundColor: 'black',
}




*/ 

export default Header