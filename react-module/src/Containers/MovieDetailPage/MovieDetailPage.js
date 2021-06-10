import React, { useEffect } from 'react';
import MovieDetail from "../../Components/MovieDetail/MovieDetail.js";
import { useHistory } from "react-router";
import ValorationsBox from "../../Components/ValorationsBox/ValorationsBox";
import { useDispatch, useSelector } from 'react-redux';
import DivisionTitle from '../../Components/DivisionTitle/DivisionTitle.js';
import LargeButton from '../../Components/LargeButton/LargeButton.js';
import { valorationAction } from '../../Store/Actions/valorationAction.js';
import './MovieDetailPage.scss'

const MovieDetailPage = () => {
    const history = useHistory();
    const movie = useSelector(state => state.movie);
    
    useEffect(()=>{
        if(!movie.title)
            history.push('/');
    },[])
    

    const user = useSelector(state => state.user);
    const dispatch = useDispatch();
    const valorate = () => {
        dispatch(valorationAction({}));
        history.push('/valorationForm');
    }
    return(
        <div>
            <MovieDetail movie={movie}/>
            {user.name && 
            <div className="valoraion-zone">
                <LargeButton action={valorate} text="Add valoration"/>
            </div>
            }
            <DivisionTitle text="Users valorations"/>
            <ValorationsBox movie={movie._id} userId={null}/>
        </div>
    )
}

export default MovieDetailPage;