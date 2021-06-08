import React, { useState } from "react";
import Searcher from '../../Components/Searcher/Searcher.js';

const MovieCrudPage = () => {
    return(
        <div>
            <Searcher crud={true}/>
        </div>
    )
}

export default MovieCrudPage;