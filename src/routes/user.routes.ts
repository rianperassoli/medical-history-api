import { Router } from "express";

import { FindUserController } from "../controllers/FindUserController";
import { CreateUserController } from "../controllers/CreateUserController";
import { CreateUserMedicalHistoryController } from "../controllers/CreateUserMedicalHistoryController";

const findUserController = new FindUserController();
const createUserController = new CreateUserController();
const createUserMedicalHistoryController = new CreateUserMedicalHistoryController();

const userRoutes = Router();

userRoutes.get("/:email", findUserController.handle);

userRoutes.post("/", createUserController.handle);
userRoutes.post("/:user_id/medical-history", createUserMedicalHistoryController.handle);

export { userRoutes };
