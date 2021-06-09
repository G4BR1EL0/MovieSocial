import React from "react";
import './MovieDetail.scss'

const MovieDetail = ({movie}) => {
    
    return (
        <>
        <div className="movie-detail-container">
        <div className="movie-backdrop">
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
            alt="fondo"/>
        </div>
        <div className="text-container">
        <div className="movie-detail-title">
            <span>{movie.title && movie.title.toUpperCase()}</span>
        </div>
        <div className="cursive">
            <span>{movie.tagline}</span>    
        </div>
        <div>
            <span>{movie.overview}</span>    
        </div>
        <div><span className="cursive">Cast:</span> 
        {movie.cast && movie.cast.map((actor, index) => {
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
        {movie.genres && movie.genres.map((genre, index) => {
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
            <a href={`https://www.youtube.com/watch?v=${movie.video}`} target="_blank" rel="noreferrer">Trailer</a>            
        </div>
        </div>
        </div>
        </>
    )
};

export default MovieDetail;