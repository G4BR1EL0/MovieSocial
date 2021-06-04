import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import './MovieDetail.scss'

const MovieDetail = () => {

    const movie = useSelector(state => state.movie);
    const user = useSelector(state => state.user);

    return (
        <>
        <div className="movie-detail-container">
        <div className="movie-backdrop">
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
            alt="fondo"/>
        </div>
        <div className="movie-detail-title">
            <span>{movie.title.toUpperCase()}</span>
        </div>
        <div className="cursive">
            <span>{movie.tagline}</span>    
        </div>
        <div>
            <span>{movie.overview}</span>    
        </div>
        <div><span className="cursive">Cast:</span> 
        {movie.cast.map((actor, index) => {
            if(index){
                return(
                    <span key={index}>, {actor}</span>
                )
            }
            return(
                <span key={index}> {actor}</span>
            )
        })}
        </div>
        <div><span className="cursive">Genre:</span>  
        {movie.genres.map((genre, index) => {
            if(index){
                return(
                    <span key={index}>, {genre}</span>
                )
            }
            return(
                <span key={index}> {genre}</span>
            )
        })}
        </div>
        <div><span className="cursive">Director: </span>{movie.director}</div>
        <div className="enlace">
            <a href={`https://www.youtube.com/watch?v=${movie.video}`} target="_blank" rel="noreferrer">trailer</a>            
        </div>
        </div>
        </>
    )
};

export default MovieDetail;