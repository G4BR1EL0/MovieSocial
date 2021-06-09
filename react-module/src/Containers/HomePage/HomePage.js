import React from "react";
import DivisionTitle from "../../Components/DivisionTitle/DivisionTitle";
import MovieCarousel from "../../Components/MovieCarousel/MovieCarousel";
import ValorationCarousel from '../../Components/ValorationCarousel/ValorationCarousel.js';


const HomePage = () => {

    return(
        <div>
            <DivisionTitle text="Popular Movies"/>
            <MovieCarousel/>
            <br/><br/>
            <ValorationCarousel/>
        </div>
           
    )
}

export default HomePage;