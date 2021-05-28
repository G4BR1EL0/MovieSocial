import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

//connect to db
let connect = () => {
    mongoose.connect(process.env.DBNAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    });
};

export default connect;