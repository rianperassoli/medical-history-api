import { ICreateUserDTO } from "../DTOs/ICreateUserDTO";
import { User } from "../entities/User";
import { AppError } from "../errors/AppError";
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

    const emailExists = await userRepository.findByEmail(email)

    if (emailExists) {
      throw new AppError('Email already exists')
    }

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
