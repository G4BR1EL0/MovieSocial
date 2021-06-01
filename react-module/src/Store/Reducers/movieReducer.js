const movieReducer = (movie = {}, action) => {
    switch (action.type) {
        case 'SET_MOVIE':    
            return action.movie;
        default:
            return movie;
    }
}

export default movieReducer