import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { movieAction } from '../../Store/Actions/movieActions.js';
import ApiConsumer from '../../Util/ApiConsumer.js';
import BoxMovie from '../BoxMovie/BoxMovie.js';
import './Searcher.scss'


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

        setMovies(moviesList);
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
            <h3 className="txtS">Search</h3>
            <div className="cntMainS">
                <div className="txtUse">
                    <p className="txtP">From here, you can search for all the movies you want to see, by {criteria} </p> 
                </div>
                <div className="boxSearch">
                    <div className="boxInfo">
                        
                    </div>
                    <div className="boxIB">
                        <input className="impS" type="text" onChange={(e) => setText(e.target.value)} ></input>
                        <button onClick={(e) => buscarMovies(e)}>Search</button>
                    </div>
                    <br/>
                    <div className="contenedor">
                        {movies.map((movie, index ) => {
                            return (
                                <BoxMovie 
                                key={index} 
                                movies={movie} 
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