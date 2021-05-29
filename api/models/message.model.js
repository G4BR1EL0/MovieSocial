import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MessageSchema = new Schema ({
    chat: {type: Schema.Types.ObjectId, ref: "Chat"},
    sender: {type: Schema.Types.ObjectId, ref: "User"},
    message: String,
    datetime: {type: Date, default: Date.now()}
});

const Message = mongoose.model('Message', MessageSchema);

export default Message;