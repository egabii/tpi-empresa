
import "./Popup.css"

function Popup(props) {
    return (props.trigger) ? (
        <div className ="popup">
            <div className="popup-inner">    
                {props.children}
                <button type="button" class="btn-close closeB" aria-label="Close" onClick={()=>props.setTrigger(false)} >
                </button>
            </div>
        </div>
    ) : "";
}

export default Popup