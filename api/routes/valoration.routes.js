import { Router } from 'express';
import { valorationController } from '../controllers/valorations.controller.js';

const valorationRoutes = Router();

valorationRoutes.get("/", valorationController.list);
valorationRoutes.post("/", valorationController.create);
valorationRoutes.delete("/:id", valorationController.delete);

export default valorationRoutes;