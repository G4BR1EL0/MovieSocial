import dotenv from 'dotenv';

dotenv.config();
//const urlLocal = process.env.URLLOCAL;
const urlLocal = "http://127.0.0.1:5000";

//Object used to connect to local API and to fetch information
const ApiConsumer = {
    
    login : async (email, password) => {
        try {
            let response = await fetch(`${urlLocal}/login`, 
            { method: 'POST', 
                body: JSON.stringify({ 
                    email: email, 
                    password: password }),
                headers:{'Content-Type': 'application/json'}
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    register : async (name, email, password, admin = false) => {
        try {
            let response = await fetch(`${urlLocal}/singup`, 
            { method: 'POST', 
            body: JSON.stringify({ 
                name: name,
                email: email, 
                password: password,
                admin: admin}),
                headers:{'Content-Type': 'application/json'}
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getUser : async (token) => {
        try {
            let response = await fetch(`${urlLocal}/users`, 
            { method: 'GET',             
                headers:{
                    'token': token
                }
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getMoviesByGenre : async ( genre) => {
        try {
            let response = await fetch(`${urlLocal}/movies/genre`, 
            { method: 'GET',             
                headers:{
                    'genre': genre
                }
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getMoviesByActor : async ( actors) => {
        try {
            let response = await fetch(`${urlLocal}/movies/actors`, 
            { method: 'GET',             
                headers:{
                    'actors': actors
                }
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getMoviesByTitle : async ( title) => {
        try {
            let response = await fetch(`${urlLocal}/movies/title`, 
            { method: 'GET',             
                headers:{
                    'title': title
                }
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getMoviesByDirector : async ( director) => {
        try {
            let response = await fetch(`${urlLocal}/movies/director`, 
            { method: 'GET',             
                headers:{
                    'director': director
                }
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getMoviesById : async (id) => {
        try {
            let response = await fetch(`${urlLocal}/movies/id`, 
            { method: 'GET',             
                headers:{
                    'id': id
                }
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getMovies : async () => {
        try {
            let response = await fetch(`${urlLocal}/movies/`, { method: 'GET' });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
}

export default ApiConsumer