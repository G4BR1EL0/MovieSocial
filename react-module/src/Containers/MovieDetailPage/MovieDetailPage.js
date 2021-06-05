import React from "react";
import MovieDetail from "../../Components/MovieDetail/MovieDetail.js";
import { useHistory } from "react-router";

const MovieDetailPage = () => {
    const history = useHistory();
    const valorate = () => {
        history.push('/add-valoration');
    }
    return(
        <div>
            <MovieDetail/>
            <button onClick={() => {valorate()}}>Add valoration</button>
        </div>
           
    )
}

export default MovieDetailPage;