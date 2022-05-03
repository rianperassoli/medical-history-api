import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";
import { CreateUserMedicalHistoryController } from "../controllers/CreateUserMedicalHistoryController";

const createUserController = new CreateUserController();
const createUserMedicalHistoryController = new CreateUserMedicalHistoryController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/:user_id/medical-history", createUserMedicalHistoryController.handle);

export { userRoutes };
