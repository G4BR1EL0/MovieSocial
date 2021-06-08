import Movies from '../models/movie.model.js';

export const movieController = {
    list: async (req, res) => {
        let respuesta = await Movies.find().limit(20);
        res.send(respuesta);
    },
    searchId: async (req, res) => {
        let respuesta = await Movies.findOne({_id:req.headers.id});
        res.send(respuesta);
    },
    searchMovie: async (req, res) => {
        let respuesta = await Movies.find(
                            {$or: [
                                    {title:{ $regex: '.*' + req.headers.value + '.*' }},
                                    {genres:{ $regex: '.*' + req.headers.value + '.*' }},
                                    {cast: { $regex: '.*' + req.headers.value + '.*' }},
                                    {director: { $regex: '.*' + req.headers.value + '.*' }}
                                  ]});
        res.send(respuesta);
    },
    searchTitle: async (req, res) => {
        let respuesta = await Movies.find({title:{ $regex: '.*' + req.headers.title + '.*' }});
        res.send(respuesta);
    },
    searchGenre: async (req, res) => {
        let respuesta = await Movies.find({genres:{ $regex: '.*' + req.headers.genre + '.*' }});
        res.send(respuesta);
    },
    searchActors: async (req, res) => {
        let respuesta = await Movies.find({cast: { $regex: '.*' + req.headers.actors + '.*' }});
        res.send(respuesta);
    },
    searchDirector: async (req, res) => {
        let respuesta = await Movies.find({director: { $regex: '.*' + req.headers.director + '.*' }});
        res.send(respuesta);
    },
    create: async (req, res) => {
        let respuesta = await Movies.create(req.body);
        res.send(respuesta);
    },
    delete: async (req, res) => {
        let respuesta = await Movies.findByIdAndDelete(req.headers.id)   
        res.send(respuesta);
    },
    deleteAll: async (req, res) => {
        let respuesta = await Movies.remove({});    
        res.send(respuesta);
    },
    update: async (req, res) => {
        let respuesta = await Movies.updateOne({_id:req.body.id}, 
            {$set:{title:req.body.title, 
                tagline:req.body.tagline,
                backdrop_path:req.body.backdrop_path,
                cast:req.body.cast,
                genres:req.body.genres,
                director:req.body.director,
                overview:req.body.overview,
                poster_path:req.body.poster_path,
                video:req.body.video
            }});
        res.send(respuesta);
    }
} 