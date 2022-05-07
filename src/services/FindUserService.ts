import { UserRepository } from "../repositories/UserRepository";
import { UserMedicalHistoryRepository } from "../repositories/UserMedicalHistoryRepository";
import { User } from "../entities/User";
import { UserMedicalHistory } from "../entities/UserMedicalHistory";

class FindUserService {
  async execute(email: string): Promise<User> {
    const userRepository = new UserRepository()
    const userMedicalHistoryRepository = new UserMedicalHistoryRepository()

    const user = await userRepository.findByEmail(email)

    user.medicalHistory = await userMedicalHistoryRepository.findByUser(String(user.id));

    return user;
  }
}

export { FindUserService };
