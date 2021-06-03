import React from "react";
import MovieCarousel from "../../Components/MovieCarousel/MovieCarousel";
import Valoration from '../../Components/Valoration/Valoration.js';
import ValorationCarousel from '../../Components/ValorationCarousel/ValorationCarousel.js';



const HomePage = () => {

    return(
        <div>
            Home
            <MovieCarousel/>
            <ValorationCarousel/>

        </div>
           
    )
}

export default HomePage;