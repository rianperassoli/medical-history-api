import { ICreateUserMedicalHistoryDTO } from "../DTOs/ICreateUserMedicalHistoryDTO";
import { UserMedicalHistory } from "../entities/UserMedicalHistory";
import { UserMedicalHistoryRepository } from "../repositories/UserMedicalHistoryRepository";

class CreateUserMedicalHistoryService {
  async execute({
    user_id,
    height,
    weight,
    pregnant,
    illnesses
  }: ICreateUserMedicalHistoryDTO): Promise<UserMedicalHistory> {
    const userMedicalHistoryRepository = new UserMedicalHistoryRepository()

    return userMedicalHistoryRepository.create({
      user_id,
      height,
      weight,
      pregnant,
      illnesses
    });
  }
}

export { CreateUserMedicalHistoryService };
