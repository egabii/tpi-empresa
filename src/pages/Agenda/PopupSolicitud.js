import React from 'react';
import "./Popup.css"

function Popup(props) {
    return (props.trigger) ? (
        <div className ="popup">
            <div className="popup-inner">
                <button onClick={()=>props.setTrigger(false)} type="button" class="close close-btn" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup
