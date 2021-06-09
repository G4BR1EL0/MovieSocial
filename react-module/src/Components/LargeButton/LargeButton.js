import React from "react";
import './LargeButton.scss';

const LargeButton = (props) => {
    return(
        <button onClick={() => props.action(props.param)} className="large-button">
            {props.text}
        </button>
    )
}

export default LargeButton;