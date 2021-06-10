import { Router } from 'express';
import { userController } from '../controllers/users.controller.js';
import checkJWT from '../middlewares/checkJWT.middleware.js';
import adminAuth from '../middlewares/checkAdmin.middleware.js';

const userRoutes = Router();

userRoutes.get("/", userController.list);
userRoutes.patch("/",checkJWT, userController.update);
userRoutes.delete("/all",adminAuth, userController.deleteAll);
userRoutes.delete("/:id",checkJWT, userController.delete);

export default userRoutes;