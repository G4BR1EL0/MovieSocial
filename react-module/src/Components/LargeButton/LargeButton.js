import React from "react";
import './LargeButton.scss';

const LargeButton = (props) => {
    let action;

    if(props.action)
        action=props.action;
    else
        action = () => {}
        
    return(
        <button onClick={() => action(props.param)} className="large-button" type={props.typeButton}>
            {props.text}
        </button>
    )
}

export default LargeButton;