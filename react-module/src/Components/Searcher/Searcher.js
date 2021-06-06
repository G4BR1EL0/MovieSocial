import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { movieAction } from '../../Store/Actions/movieActions.js';
import ApiConsumer from '../../Util/ApiConsumer.js';
import BoxMovie from '../BoxMovie/BoxMovie.js';
import './Searcher.scss'
import Input from '../Input/Input.js';


const Searcher = () => {
    const criteria = useSelector(state => state.criteria);
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
        let moviesByTitle= await ApiConsumer.getMoviesByTitle(value);
        let moviesByGenre= await ApiConsumer.getMoviesByGenre(value);
        let moviesByActor= await ApiConsumer.getMoviesByActor(value);
        let moviesByDirector= await ApiConsumer.getMoviesByDirector(value);
        let moviesList = moviesByTitle.concat(moviesByGenre, moviesByActor, moviesByDirector);

        //process to filter repated movies 
        let moviesMap = moviesList.map(item =>{
            return [item._id, item]
        });
        let moviesMapArr = new Map(moviesMap);
        let moviesFiltered = [...moviesMapArr.values()]; 

        setMovies(moviesFiltered);
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
                    <br/>
                    <div className="contenedor">
                        {movies.map((movie, index ) => {
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