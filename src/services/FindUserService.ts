import { User } from "../entities/User";
import { UserRepository } from "../repositories/UserRepository";

class FindUserService {
  async execute(email: string): Promise<User> {
    const userRepository = new UserRepository()

    return userRepository.findByEmail(email);
  }
}

export { FindUserService };
