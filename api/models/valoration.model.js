import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ValorationSchema = new Schema ({
    movie: {type: Schema.Types.ObjectId, ref: "Movie"},
    user: {type: Schema.Types.ObjectId, ref: "User"},
    comment: String,
    stars: Number
});

const Valoration = mongoose.model('Valoration', ValorationSchema);

export default Valoration;