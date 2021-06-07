import React from "react";
import MovieCarousel from "../../Components/MovieCarousel/MovieCarousel";
import ValorationCarousel from '../../Components/ValorationCarousel/ValorationCarousel.js';

const HomePage = () => {

    return(
        <div>
            <br/>
            <MovieCarousel/>
            <br/><br/>
            <ValorationCarousel/>
        </div>
           
    )
}

export default HomePage;