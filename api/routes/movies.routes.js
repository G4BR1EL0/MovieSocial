import { Router } from 'express';
import { movieController } from '../controllers/movies.controller.js';

const movieRoutes = Router();

movieRoutes.get("/", movieController.list);
movieRoutes.get("/value", movieController.searchMovie);
movieRoutes.get("/title", movieController.searchTitle);
movieRoutes.get("/genre", movieController.searchGenre);
movieRoutes.get("/actors", movieController.searchActors);
movieRoutes.get("/director", movieController.searchDirector);
movieRoutes.post("/", movieController.create);
movieRoutes.delete("/", movieController.delete);
movieRoutes.delete("/all", movieController.deleteAll);
movieRoutes.get("/id", movieController.searchId);
movieRoutes.patch("/", movieController.update);

export default movieRoutes;