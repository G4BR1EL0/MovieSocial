import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const LikeSchema = new Schema ({
    valoration: {type: Schema.Types.ObjectId, ref: "Valoration"},
    user: {type: Schema.Types.ObjectId, ref: "User"},
    evaluation: String
});

const Like = mongoose.model('Like', LikeSchema);

export default Like;