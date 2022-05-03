import { Request, Response } from "express";

import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, first_name, last_name, gender, birthdate, phone } = request.body;

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({
      email, first_name, last_name, gender, birthdate, phone
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
