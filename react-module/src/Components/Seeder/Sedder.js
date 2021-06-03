import React from "react";
import ApiConsumer from "../../Util/ApiConsumer";


const Seeder = () => {
    const borrar = async () => {       
        let response1 = await ApiConsumer.deleteSeed();
        let response2 = await ApiConsumer.deleteUsers(); 
        let response3 = await ApiConsumer.deleteValoration(); 
        console.log(response1);
    }
    
    const insertarSeed = async () =>{
        for (let i=1;i<51;i++){
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
            console.log(response1, response2);
        }
        catch(e){
            console.log(e);
        }
    }
    
    const insertarValoraciones = async () => {
        try{
   
            let movies = await ApiConsumer.getMovies();
            let user = await ApiConsumer.login("user@mail.com", "user");
            movies.forEach(async (movie, index) => {
                let valoration = {};
                valoration.movie = movie._id;
                valoration.user = user._id;
                valoration.comment = `valoration number ${index}`;
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
        <div>
            <button id="buscar" onClick={()=>{insertarSeed()}}>insert SEED</button>
            <button id="borrar" onClick={()=>{borrar()}}>delete SEED</button>          
        </div>
           
    )
}

export default Seeder;