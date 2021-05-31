import { Router } from 'express';
import { movieController } from '../controllers/movies.controller.js';

const movieRoutes = Router();

movieRoutes.get("/", movieController.list);
movieRoutes.get("/title", movieController.searchTitle);
movieRoutes.get("/genre", movieController.searchGenre);
movieRoutes.get("/actors", movieController.searchActors);
movieRoutes.get("/director", movieController.searchDirector);
movieRoutes.post("/seed", movieController.insertSeed);
movieRoutes.delete("/seed", movieController.deleteSeed);
movieRoutes.get("/id", movieController.searchId);

export default movieRoutes;