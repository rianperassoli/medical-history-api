import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserService } from "../services/CreateUserService";

class TesteDialpadController {
  async handle(request: Request, response: Response): Promise<Response> {
    console.log(request.body);


    return response.status(201).json(request.body);
  }
}

export { TesteDialpadController };
