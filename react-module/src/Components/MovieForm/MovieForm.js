import React, { useState } from "react";
import { useSelector } from "react-redux";
import ApiConsumer from "../../Util/ApiConsumer";
import { useHistory } from "react-router";
import TextArea from '../TextArea/TextArea.js';
import Input from "../Input/Input";
import './MovieForm.scss';
import LargeButton from "../LargeButton/LargeButton";
import DivisionTitle from '../DivisionTitle/DivisionTitle.js';

const MovieForm = () => {
    const movie = useSelector(state => state.movie);
    const token = useSelector(state => state.token);

    let [editable, setEditable] = useState(movie.title? true : false);
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
        movieValue.title = title.toLowerCase();
        movieValue.tagline = tagline;
        movieValue.backdrop_path = backdrop_path;
        movieValue.cast = cast;
        movieValue.genres = genres;
        movieValue.director = director.toLowerCase();
        movieValue.overview = overview;
        movieValue.poster_path = poster_path;
        movieValue.video = video;
        if(typeof(cast) === 'string'){
            movieValue.cast = cast.toLowerCase().split(',');
        }
        if(typeof(genres) === 'string'){
            movieValue.genres = genres.toLowerCase().split(',');
        }
        let respuesta;
        if(movie.title){
            respuesta = await ApiConsumer.updateMovie(movieValue, token.jwt); 
        }
        else{
            respuesta = await ApiConsumer.insertMovie(movieValue, token.jwt); 
        }

        if (respuesta){
            history.push('/moviesCrud');
        };     
    }
    const goBack = () => {
        history.push('/moviesCrud');
    }


    const deleteMovie = async (movie) => {
        if(window.confirm('Are you sure want to delete Movie?')){
            let respuesta = await ApiConsumer.deleteMovie(movie._id, token.jwt);
            if(respuesta){
                let valorations =await ApiConsumer.getValorationByMovie(movie._id);
                valorations.respuesta.forEach(async(valoration) => {
                    await ApiConsumer.deleteValoration(valoration._id);
                });
            }
            history.push('/moviesCrud');
        }
    }
    return(
        <>
            {editable &&
                <DivisionTitle text={'Edit or Delete '+title.toUpperCase()}/>
            }
            {!editable &&
                <DivisionTitle text={'Add a new movie'}/>
            }
        <div className="movie-form-container">
        <form onSubmit={handleSubmit}>
            <div className="form-input">
            <Input 
                type = 'text'
                label = 'Title'
                value = {title}
                setter = {setTitle}    
                name = 'title'
            />
            </div>
            <div className="form-input">
            <Input 
                type = 'text'
                label = 'Tag line'
                value = {tagline}
                setter = {setTagLine}    
                name = 'tagline'
            />
            </div>
            <p> To insert a backdrop image you must use the url of The Movie DB Api. 
                Example: 'https://image.tmdb.org/t/p/original(insert this part of the url)'</p>
            <div className="form-input">
            <Input 
                type = 'text'
                label = 'Backdrop image'
                value = {backdrop_path}
                setter = {setBackdrop_path}    
                name = 'backdrop_path'
            />
            </div>
            <p>To insert the members of the cast all names must be separeted by ',' </p>
            <div className="form-input">
            <TextArea 
                type = 'text'
                label = 'Cast'
                value = {cast}
                setter = {setCast}    
                name = 'cast'
            ></TextArea>
            </div>
            <p>To insert the genres of the movie all genres must be separeted by ',' </p>
            <div className="form-input">
            <Input 
                type = 'text'
                label = 'Genres'
                value = {genres}
                setter = {setGenres}    
                name = 'genres'
            />
            </div>
            <div className="form-input">
            <Input 
                type = 'text'
                label = 'Director'
                value = {director}
                setter = {setDirector}    
                name = 'director'
            />
            </div>
            <div className="form-input">
            <TextArea 
                type = 'text'
                label = 'Overview...'
                value = {overview}
                setter = {setOverview}    
                name = 'overview'
            ></TextArea>
            </div>
            <p>To insert a poster image you must use the url of The Movie DB Api. 
                Example: 'https://image.tmdb.org/t/p/original( insert this part of the url)'</p>
            <div className="form-input">
            <Input 
                type = 'text'
                label = 'Poster path'
                value = {poster_path}
                setter = {setPoster_path}    
                name = 'posterpath'
            />
            </div>
            <p>To insert a trailer video you must use the url of youtube. 
                Example: 'https://www.youtube.com/watch?v=(insert this part of the url)'</p>
            <div className="form-input">
            <Input 
                type = 'text'
                label = 'Video path'
                value = {video}
                setter = {setVideo}    
                name = 'video'
            />
            </div>
            <p>All filds are required</p>
            <div>
                <LargeButton typeButton="submit" text="Save" />
                {editable &&
                <LargeButton action={deleteMovie} param={movie} text="Delete" />
                }
                <LargeButton text="Return" action={goBack}/>
            </div>
        </form>
        </div>
        </>
    )
}

export default MovieForm;

