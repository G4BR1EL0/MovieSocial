import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserFollowingSchema = new Schema ({
    user: {type: Schema.Types.ObjectId, ref: "User"},
    following: {type: Schema.Types.ObjectId, ref: "User"}
});

const UserFollowing = mongoose.model('UserFollowing', UserFollowingSchema);

export default UserFollowing;