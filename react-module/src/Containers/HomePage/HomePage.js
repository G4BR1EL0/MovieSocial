import React from "react";
import DivisionTitle from "../../Components/DivisionTitle/DivisionTitle";
import MovieCarousel from "../../Components/MovieCarousel/MovieCarousel";
import ValorationCarousel from '../../Components/ValorationCarousel/ValorationCarousel.js';


const HomePage = () => {

    return(
        <div>
            <DivisionTitle text="Popular Movies"/>
            <MovieCarousel/>
            <DivisionTitle text="Recent Valuations"/>
            <ValorationCarousel/>
            <DivisionTitle text="Comedy"/>
            <MovieCarousel genre="comedy"/>
            <DivisionTitle text="Action"/>
            <MovieCarousel genre="action"/>
            <DivisionTitle text="Adventure"/>
            <MovieCarousel genre="adventure"/>
        </div>
           
    )
}

export default HomePage;