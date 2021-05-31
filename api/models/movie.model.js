import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema ({
    cast: [String],
    backdrop_path: String,
    director: String,
    genres: [String],
    overview: String,
    poster_path: String,
    tagline: String,
    title: String,
    video: String
});

const Movie = mongoose.model('Movie', MovieSchema);

export default Movie;