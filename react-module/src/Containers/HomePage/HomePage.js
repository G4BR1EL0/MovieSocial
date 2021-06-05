import React from "react";
import Input from "../../Components/Input/Input";
import MovieCarousel from "../../Components/MovieCarousel/MovieCarousel";
import ValorationCarousel from '../../Components/ValorationCarousel/ValorationCarousel.js';

const HomePage = () => {

    return(
        <div>
            <MovieCarousel/>
            <ValorationCarousel/>
            <Input/>
        </div>
           
    )
}

export default HomePage;