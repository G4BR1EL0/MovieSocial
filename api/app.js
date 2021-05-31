import movieRoutes from "./routes/movies.routes.js";
import userRoutes from "./routes/users.routes.js";
import loginRoutes from "./routes/login.routes.js";
import express  from 'express';
import connect from './db/mongo.js';
import dotenv from 'dotenv';
import singupRoutes from "./routes/singup.routes.js";

connect();
dotenv.config();

const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Request-Headers', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, token, genre, actors, title, director, id, movieId, userID');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH ');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    next();
});

app.use('/singup', singupRoutes);
app.use('/login', loginRoutes);
app.use('/users', userRoutes);
app.use('/movies', movieRoutes);

app.listen(process.env.PUERTO, () => {
    console.log(`web server running on port ${process.env.PUERTO}`);
});
