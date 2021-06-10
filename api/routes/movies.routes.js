import { Router } from 'express';
import { movieController } from '../controllers/movies.controller.js';
import adminAuth from '../middlewares/checkAdmin.middleware.js';

const movieRoutes = Router();

movieRoutes.get("/", movieController.list);
movieRoutes.get("/value", movieController.searchMovie);
movieRoutes.get("/title", movieController.searchTitle);
movieRoutes.get("/genre", movieController.searchGenre);
movieRoutes.get("/actors", movieController.searchActors);
movieRoutes.get("/director", movieController.searchDirector);
movieRoutes.post("/",adminAuth, movieController.create);
movieRoutes.delete("/",adminAuth, movieController.delete);
movieRoutes.delete("/all",adminAuth, movieController.deleteAll);
movieRoutes.get("/id", movieController.searchId);
movieRoutes.patch("/",adminAuth, movieController.update);

export default movieRoutes;