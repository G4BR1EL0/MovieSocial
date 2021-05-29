import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserFollowersSchema = new Schema ({
    user: {type: Schema.Types.ObjectId, ref: "User"},
    follower: {type: Schema.Types.ObjectId, ref: "User"}
});

const UserFollowers = mongoose.model('UserFollowers', UserFollowersSchema);

export default UserFollowers;