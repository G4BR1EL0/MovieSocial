import React from "react";
import './DivisionTitle.scss'

const DivisionTitle = (props) => {
    return(
        <div className="division-title">
            {props.text}
        </div>
    )
}

export default DivisionTitle;