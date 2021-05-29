import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieTagSchema = new Schema ({
    movie: {type: Schema.Types.ObjectId, ref: "Movie"},
    tag: {type: Schema.Types.ObjectId, ref: "Tag"},
    count: Number
});

const MovieTag = mongoose.model('MovieTag', MovieTagSchema);

export default MovieTag;