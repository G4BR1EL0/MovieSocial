import React, { useEffect } from 'react';
import MovieDetail from "../../Components/MovieDetail/MovieDetail.js";
import { useHistory } from "react-router";
import ValorationsBox from "../../Components/ValorationsBox/ValorationsBox";
import { useSelector } from "react-redux";
import DivisionTitle from '../../Components/DivisionTitle/DivisionTitle.js';

const MovieDetailPage = () => {
    const history = useHistory();
    const movie = useSelector(state => state.movie);
    
    useEffect(()=>{
        if(!movie.title)
            history.push('/');
    },[])
    

    const user = useSelector(state => state.user);
    const valorate = () => {
        history.push('/add-valoration');
    }
    return(
        <div>
            <MovieDetail movie={movie}/>
            {user.name && 
                <button onClick={() => {valorate()}}>Add valoration</button>
            }
            <DivisionTitle text="Users valorations"/>
            <ValorationsBox movie={movie._id} userId={null}/>
        </div>
    )
}

export default MovieDetailPage;