export const movieAction = (movie) => {
    return{
        type: 'SET_MOVIE',
        movie: {...movie}
    }
}