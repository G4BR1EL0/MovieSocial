import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { movieAction } from '../../Store/Actions/movieActions.js';
import ApiConsumer from '../../Util/ApiConsumer.js';
import BoxMovie from '../BoxMovie/BoxMovie.js';
import './Searcher.scss'
import Input from '../Input/Input.js';
import AddMovie from '../MovieForm/MovieForm.js';

const Searcher = (props) => {
    let [text, setText] = useState("")
    let [movies, setMovies] = useState([]);

    useEffect(()=>{
        if(text) searchMovies(text);
        else popularMovies();
    },[text])

    useEffect(()=>{
        popularMovies();
    },[])

    const searchMovies = async (value) => {
        // let moviesByTitle= await ApiConsumer.getMoviesByTitle(value);
        // let moviesByGenre= await ApiConsumer.getMoviesByGenre(value);
        // let moviesByActor= await ApiConsumer.getMoviesByActor(value);
        // let moviesByDirector= await ApiConsumer.getMoviesByDirector(value);
        // let moviesList = moviesByTitle.concat(moviesByGenre, moviesByActor, moviesByDirector);

        // //process to filter repated movies 
        // let moviesMap = moviesList.map(item =>{
        //     return [item._id, item]
        // });
        // let moviesMapArr = new Map(moviesMap);
        // let moviesFiltered = [...moviesMapArr.values()]; 
        let response = await ApiConsumer.getMoviesSearch(value);

        setMovies(response);
    }

    const popularMovies = async () => {
        let response = await ApiConsumer.getMovies();
        setMovies(response);
    }

    const history = useHistory();
    const dispatch = useDispatch();
    const detalles = (movie) => {
        dispatch(movieAction(movie));
        history.push('/movieDetail');
    }

    const AddMovie = () => {
        dispatch(movieAction({}));
        history.push('/movieForm');
    }
    const EditMovie = (movie) => {
        dispatch(movieAction(movie));
        history.push('/movieForm');
    }
    const DeleteMovie = async (movie) => {
        if(window.confirm('Are you sure want to delete Movie?')){
            let respuesta = await ApiConsumer.deleteMovie(movie._id);
            if(respuesta){
                let valorations =await ApiConsumer.getValorationByMovie(movie._id);
                valorations.respuesta.forEach(async(valoration) => {
                    await ApiConsumer.deleteValoration(valoration._id);
                });
                if(text) searchMovies(text);
                else popularMovies();
            }
        }
    }
    
    return (
        <div className="cntSearch">
            <div className="cntMainS">
                <div className="boxSearch">
                    <Input 
                        type='text'
                        label='Search..'
                        setter={setText}    
                        name='search'
                    />
                    {props.crud &&
                        <button onClick={() => {AddMovie()}}>Add Movie</button>
                    }
                    <br/>
                    <div className="contenedor">
                        {movies.map((movie, index ) => {
                            if(props.crud){
                                return(
                                    <div className="editable-movie">
                                        <BoxMovie 
                                        key={index} 
                                        peli={movie} 
                                        funcion={detalles} 
                                        ruta={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                                        tagline={movie.tagline} />
                                        <button onClick={() => {EditMovie(movie)}}>edit</button>
                                        <button onClick={() => {DeleteMovie(movie)}}>delete</button>
                                    </div>
                                )
                            }
                            return (
                                <BoxMovie 
                                key={index} 
                                peli={movie} 
                                funcion={detalles} 
                                ruta={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
                                tagline={movie.tagline} />
                            )}
                        )}  
                    </div>
                    <br/><br/>
                </div>
            </div>
        </div>
    )
}

export default Searcher;