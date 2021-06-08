import React, { useState } from "react";
import { useSelector } from "react-redux";
import ApiConsumer from "../../Util/ApiConsumer";
import { useHistory } from "react-router";
import TextArea from '../TextArea/TextArea.js';
import Input from "../Input/Input";
import './MovieForm.scss';


const MovieForm = () => {
    const movie = useSelector(state => state.movie);
    let [title, setTitle] = useState(movie.title? movie.title : '');
    let [tagline, setTagLine] = useState(movie.tagline? movie.tagline : '');
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
        movieValue.id = movie._id;
        movieValue.title = title;
        movieValue.tagline = tagline;
        movieValue.backdrop_path = backdrop_path;
        movieValue.cast = cast;
        movieValue.genres = genres;
        movieValue.director = director;
        movieValue.overview = overview;
        movieValue.poster_path = poster_path;
        movieValue.video = video;
        if(typeof(cast) === 'string'){
            movieValue.cast = cast.split(',');
        }
        if(typeof(genres) === 'string'){
            movieValue.genres = genres.split(',');
        }
        let respuesta;
        if(movie.title){
            respuesta = await ApiConsumer.updateMovie(movieValue); 
        }
        else{
            respuesta = await ApiConsumer.insertMovie(movieValue); 
        }

        if (respuesta){
            history.push('/');
        };     
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>All filds are required</p>
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
                value = {tagline}
                setter = {setTagLine}    
                name = 'tagline'
            />
            <p>To insert a backdrop image you must use the url of The Movie DB Api. Example: 'https://image.tmdb.org/t/p/original(insert this part of the url)'</p>
            <Input 
                type = 'text'
                label = 'Backdrop image'
                value = {backdrop_path}
                setter = {setBackdrop_path}    
                name = 'backdrop_path'
            />
            <p>To insert the members of the cast all names must be separeted by ',' </p>
            <TextArea 
                type = 'text'
                label = 'Cast'
                value = {cast}
                setter = {setCast}    
                name = 'cast'
            ></TextArea>
            <p>To insert the genres of the movie all genres must be separeted by ',' </p>
            <Input 
                type = 'text'
                label = 'Genres'
                value = {genres}
                setter = {setGenres}    
                name = 'genres'
            />
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
            <p>To insert a poster image you must use the url of The Movie DB Api. Example: 'https://image.tmdb.org/t/p/original( insert this part of the url)'</p>
            <Input 
                type = 'text'
                label = 'Poster path'
                value = {poster_path}
                setter = {setPoster_path}    
                name = 'posterpath'
            />
            <p>To insert a trailer video you must use the url of youtube. Example: 'https://www.youtube.com/watch?v=(insert this part of the url)'</p>
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

