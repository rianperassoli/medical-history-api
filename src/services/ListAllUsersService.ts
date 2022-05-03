import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

class ListAllUsersService {
  async execute(): Promise<User[]> {
    const userRepository = new UserRepository()

    return userRepository.findAll();
  }
}

export { ListAllUsersService };
