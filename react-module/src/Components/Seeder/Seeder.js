import React from "react";
import ApiConsumer from "../../Util/ApiConsumer";
import './Seeder.scss';
import {ImDatabase} from 'react-icons/im';
import { LoremIpsum } from "lorem-ipsum";


const Seeder = () => {
    const seeder = () => {
        borrar();
        insertarSeed()
    }

    const borrar = async () => {       
        let response1 = await ApiConsumer.deleteSeed();
        let response2 = await ApiConsumer.deleteUsers(); 
        let response3 = await ApiConsumer.deleteValorations(); 
        console.log(response1);
        console.log(response2);
        console.log(response3);
    }
    
    const insertarSeed = async () =>{
        for (let i=1;i<11;i++){
            await buscar(i);
        }
        await insertUsers();
        await insertarValoraciones();
    }
    
    const buscar = async (i) => {
        try{
        const arrayPeliculas = [];
        let peliculasDB = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=300a4e22bb865bb8d0cd9a966b3c01aa&page=${i}`);
        peliculasDB = await peliculasDB.json();
    
        peliculasDB.results.forEach( movie => {
            arrayPeliculas.push({id:movie.id});
        })
        
        arrayPeliculas.forEach( async movie => {
            try{
            let detallePelicula = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=300a4e22bb865bb8d0cd9a966b3c01aa`);
            let creditosPelicula = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=300a4e22bb865bb8d0cd9a966b3c01aa`);
            let trailerVideo = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=300a4e22bb865bb8d0cd9a966b3c01aa`)
    
    
            creditosPelicula = await creditosPelicula.json(); 
            detallePelicula = await detallePelicula.json();
            trailerVideo = await trailerVideo.json();
    
            movie.backdrop_path = detallePelicula.backdrop_path;
            const arrayGeneros = [];
            detallePelicula.genres.forEach(genre => {
                arrayGeneros.push(genre.name.toLowerCase())
            })
            movie.genres = arrayGeneros;
            movie.title = detallePelicula.title.toLowerCase();
            movie.overview = detallePelicula.overview;
            movie.poster_path = detallePelicula.poster_path;
            movie.tagline = detallePelicula.tagline;
            movie.price = 0;
            movie.video = trailerVideo.results[0].key;
    
            let director ;
            creditosPelicula.crew.forEach( crew => {
                if( crew.job === "Director" ) director=crew.name;
            });
    
            movie.director = director.toLowerCase();
            let contador=0;
            const actores = [];
            creditosPelicula.cast.forEach(crew => {
                if(contador < 10) {
                    contador++;
                    actores.push( crew.name.toLowerCase());
                }
            }) 
            movie.cast = actores;  
            
            let response = await ApiConsumer.insertMovie(movie);
            console.log(response);
            
            }
            catch(e){
                console.log(e);
            }
    
        })
        
        }
        catch(e){
            console.log(e);
        }
    
    }

    const insertUsers = async () => {
        try{
            let response1 = await ApiConsumer.register("user", "user@mail.com", "user");
            let response2 = await ApiConsumer.register("admin", "admin@mail.com", "admin", true);
            console.log(response1);
            console.log(response2);
        }
        catch(e){
            console.log(e);
        }
    }

    const lorem = new LoremIpsum({
        sentencesPerParagraph: {
            max: 3,
            min: 1
        },
        wordsPerSentence: {
            max: 7,
            min: 3
        }
    });

    const insertarValoraciones = async () => {
        try{
            let movies = await ApiConsumer.getMovies();
            let user = await ApiConsumer.login("user@mail.com", "user");
            console.log(user)
            movies.forEach(async (movie, index) => {
                let text = lorem.generateParagraphs(1);
                let valoration = {};
                valoration.movie = movie._id;
                valoration.user = user.user._id;
                valoration.comment = text;
                valoration.stars = 4;
                let response = await ApiConsumer.insertValoration(valoration);
                console.log(response);
            })
        }
        catch(e){
            console.log(e);
        }
    }
    return(
        <div className="seed-container">
            <div className="seed-icon"><ImDatabase/></div>
            <div className="seed-pulsable" onClick={() => { seeder()}}>
                <span>USE SEED</span>
            </div>
        </div>
           
    )
}

export default Seeder;