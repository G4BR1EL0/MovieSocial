import dotenv from 'dotenv';

dotenv.config();
//const urlLocal = process.env.REDLOCAL;
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
    updateUser : async (id, name, email, password, admin = false) => {
        try {
            let response = await fetch(`${urlLocal}/user`, 
            { method: 'PATCH', 
                body: JSON.stringify({ 
                    name: name,
                    email: email, 
                    password: password,
                    admin: admin}),
                headers:{id:id,
                    'Content-Type': 'application/json'}
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getUser : async (token) => {
        try {
            let response = await fetch(`${urlLocal}/user`, 
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
    deleteValorations : async () => {
        try {
            let response = await fetch(`${urlLocal}/valoration/all`, { method: 'DELETE' });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    deleteUsers : async () => {
        try {
            let response = await fetch(`${urlLocal}/user/all`, { method: 'DELETE'});
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
    deleteSeed : async () => {
        try {
            let response = await fetch(`${urlLocal}/movies/all`, { method: 'DELETE' });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    insertMovie : async (movie) => {
        try {
            let response = await fetch(`${urlLocal}/movies`, 
            { method: 'POST', 
            body: JSON.stringify(movie),
            headers:{'Content-Type': 'application/json'}
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    insertValoration : async (valoration) => {
        try {
            let response = await fetch(`${urlLocal}/valoration`, 
            { method: 'POST', 
            body: JSON.stringify(valoration),
            headers:{'Content-Type': 'application/json'}
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    updateValoration : async (valoration) => {
        try {
            let response = await fetch(`${urlLocal}/valoration`, 
            { method: 'PATCH', 
            body: JSON.stringify(valoration),
            headers:{'Content-Type': 'application/json'}
            });
            response = await response.json();
            console.log(response);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getValorations : async () => {
        try {
            let response = await fetch(`${urlLocal}/valoration`, { method: 'GET' });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getValorationByMovie : async (idUser) => {
        try {
            let response = await fetch(`${urlLocal}/valoration/by-movie`, 
            { method: 'GET',             
                headers:{
                    'id': idUser
                }
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    getValorationByUser : async (idMovie) => {
        try {
            let response = await fetch(`${urlLocal}/valoration/by-user`, 
            { method: 'GET',             
                headers:{
                    'id': idMovie
                }
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    deleteValoration : async (id) => {
        try {
            let response = await fetch(`${urlLocal}/valoration`, 
            { method: 'DELETE',
             headers: {id:id}
            });
            response = await response.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    },
}

export default ApiConsumer