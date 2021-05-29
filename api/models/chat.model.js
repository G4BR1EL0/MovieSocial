import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ChatSchema = new Schema ({
    firstUser: {type: Schema.Types.ObjectId, ref: "User"},
    secondUser: {type: Schema.Types.ObjectId, ref: "User"},
    datetime: {type: Date, default: Date.now()}
});

const Chat = mongoose.model('Chat', ChatSchema);

export default Chat;