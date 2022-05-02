import { ICreateUserDTO } from "../DTOs/ICreateUserDTO";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

class CreateUserService {
  async execute({
    id,
    email,
    first_name,
    last_name,
    gender,
    birthdate,
    phone
  }: ICreateUserDTO): Promise<User> {
    const userRepository = new UserRepository()

    return userRepository.create({
      id,
      email,
      first_name,
      last_name,
      gender,
      birthdate,
      phone
    });
  }
}

export { CreateUserService };
