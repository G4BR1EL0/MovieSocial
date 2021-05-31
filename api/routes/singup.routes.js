import { Router } from 'express';
import { userController } from '../controllers/users.controller.js';

const singupRoutes = Router();

singupRoutes.post("/", userController.create);

export default singupRoutes;