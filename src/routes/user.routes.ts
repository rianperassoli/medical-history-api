import { Router } from "express";

import { ListAllUsersController } from "../controllers/ListAllUsersController";
import { FindUserController } from "../controllers/FindUserController";
import { CreateUserController } from "../controllers/CreateUserController";
import { TesteDialpadController } from "../controllers/TesteDialpadController";
import { CreateUserMedicalHistoryController } from "../controllers/CreateUserMedicalHistoryController";

const listAllUsersController = new ListAllUsersController();
const findUserController = new FindUserController();
const createUserController = new CreateUserController();
const createUserMedicalHistoryController = new CreateUserMedicalHistoryController();
const testeDialpadController = new TesteDialpadController();

const userRoutes = Router();

userRoutes.get("/", listAllUsersController.handle);
userRoutes.get("/:email", findUserController.handle);

userRoutes.post("/", createUserController.handle);
userRoutes.post("/:user_id/medical-history", createUserMedicalHistoryController.handle);

userRoutes.post("/test", testeDialpadController.handle);

export { userRoutes };
