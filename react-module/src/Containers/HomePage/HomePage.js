import React from "react";
import MovieCarousel from "../../Components/MovieCarousel/MovieCarousel";
import ValorationCarousel from '../../Components/ValorationCarousel/ValorationCarousel.js';

const HomePage = () => {

    return(
        <div>
            <MovieCarousel/>
            <ValorationCarousel/>
        </div>
           
    )
}

export default HomePage;