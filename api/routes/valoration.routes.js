import { Router } from 'express';
import { valorationController } from '../controllers/valorations.controller.js';
import adminAuth from '../middlewares/checkAdmin.middleware.js';
import checkJWT from '../middlewares/checkJWT.middleware.js';

const valorationRoutes = Router();

valorationRoutes.get("/", valorationController.list);
valorationRoutes.post("/", valorationController.create);
valorationRoutes.patch("/", valorationController.update);
valorationRoutes.delete("/all", valorationController.deleteAll);
valorationRoutes.delete("/:id", valorationController.delete);

// valorationRoutes.post("/", checkJWT, valorationController.create);
// valorationRoutes.patch("/", checkJWT, valorationController.update);
// valorationRoutes.delete("/:id", adminAuth, valorationController.delete);

export default valorationRoutes;