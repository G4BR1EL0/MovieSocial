import { Router } from 'express';
import { valorationController } from '../controllers/valorations.controller.js';
import adminAuth from '../middlewares/checkAdmin.middleware.js';
import checkJWT from '../middlewares/checkJWT.middleware.js';

const valorationRoutes = Router();

valorationRoutes.get("/", valorationController.list);
valorationRoutes.get("/by-user", valorationController.listByUser);
valorationRoutes.get("/by-movie", valorationController.listByMovie);
valorationRoutes.post("/",checkJWT, valorationController.create);
valorationRoutes.patch("/",checkJWT, valorationController.update);
valorationRoutes.delete("/",checkJWT, valorationController.delete);
valorationRoutes.delete("/all",adminAuth, valorationController.deleteAll);


export default valorationRoutes;