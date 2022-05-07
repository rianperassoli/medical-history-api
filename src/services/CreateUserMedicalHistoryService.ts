import { inject, injectable } from "tsyringe";
import { ICreateUserMedicalHistoryDTO } from "../DTOs/ICreateUserMedicalHistoryDTO";
import { UserMedicalHistory } from "../entities/UserMedicalHistory";
import { AppError } from "../errors/AppError";
import { IUserMedicalHistoryRepository } from "../repositories/IUserMedicalHistoryRepository";

@injectable()
class CreateUserMedicalHistoryService {

  constructor(
    @inject("UserMedicalHistoryRepository")
    private userMedicalHistoryRepository: IUserMedicalHistoryRepository
  ) { }

  async execute({
    user_id,
    height,
    weight,
    pregnant,
    illnesses
  }: ICreateUserMedicalHistoryDTO): Promise<UserMedicalHistory> {
    if (!user_id) {
      throw new AppError("User id is required");
    }

    return this.userMedicalHistoryRepository.create({
      user_id,
      height,
      weight,
      pregnant,
      illnesses
    });
  }
}

export { CreateUserMedicalHistoryService };
