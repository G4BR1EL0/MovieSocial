import React, { useState } from "react";
import { useSelector } from "react-redux";
import ApiConsumer from "../../Util/ApiConsumer";
import { useHistory } from "react-router";
import TextArea from '../TextArea/TextArea.js';
import Input from "../Input/Input";


const MovieForm = () => {
    const movie = useSelector(state => state.movie);
    let [title, setTitle] = useState(movie.title? movie.title : '');
    let [tagLine, setTagLine] = useState(movie.tagLine? movie.tagLine : '');
    let [backdrop_path, setBackdrop_path] = useState(movie.backdrop_path? movie.backdrop_path : '');
    let [cast, setCast] = useState(movie.cast? movie.cast : []);
    let [genres, setGenres] = useState(movie.genres? movie.genres : []);
    let [director, setDirector] = useState(movie.director? movie.director : '');
    let [overview, setOverview] = useState(movie.overview? movie.overview : '');
    let [poster_path, setPoster_path] = useState(movie.poster_path? movie.poster_path : '');
    let [video, setVideo] = useState(movie.video? movie.video : '');

    const history = useHistory();
    

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        let movieValue = {};
        movieValue.title = title;
        movieValue.tagLine = tagLine;
        movieValue.backdrop_path = backdrop_path;
        movieValue.cast = cast;
        movieValue.genres = genres;
        movieValue.director = director;
        movieValue.overview = overview;
        movieValue.poster_path = poster_path;
        movieValue.video = video;
          
        let respuesta = await ApiConsumer.insertMovie(movieValue); 

        if (respuesta){
            history.push('/');
        };     
    }

    return(
        <form onSubmit={handleSubmit}>
            <Input 
                type = 'text'
                label = 'Title'
                value = {title}
                setter = {setTitle}    
                name = 'title'
            />
            <Input 
                type = 'text'
                label = 'Tag line'
                value = {tagLine}
                setter = {setTagLine}    
                name = 'tagline'
            />
            <Input 
                type = 'text'
                label = 'Backdrop image'
                value = {backdrop_path}
                setter = {setBackdrop_path}    
                name = 'backdrop_path'
            />
            <TextArea 
                type = 'text'
                label = 'Cast'
                value = {cast}
                setter = {setCast}    
                name = 'cast'
            ></TextArea>
            <TextArea 
                type = 'text'
                label = 'Genres'
                value = {genres}
                setter = {setGenres}    
                name = 'genres'
            ></TextArea>
            <Input 
                type = 'text'
                label = 'Director'
                value = {director}
                setter = {setDirector}    
                name = 'director'
            />
            <TextArea 
                type = 'text'
                label = 'Overview...'
                value = {overview}
                setter = {setOverview}    
                name = 'overview'
            ></TextArea>
            <Input 
                type = 'text'
                label = 'Poster path'
                value = {poster_path}
                setter = {setPoster_path}    
                name = 'posterpath'
            />
            <Input 
                type = 'text'
                label = 'Video path'
                value = {video}
                setter = {setVideo}    
                name = 'video'
            />
            <div><button type="submit">Save</button></div>
        </form>
    )
}

export default MovieForm;

