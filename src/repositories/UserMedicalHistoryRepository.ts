import { Repository } from "typeorm";

import { AppDataSource } from "../db/data-source";
import { UserMedicalHistory } from "../entities/UserMedicalHistory";
import { ICreateUserMedicalHistoryDTO } from "../DTOs/ICreateUserMedicalHistoryDTO";

class UserMedicalHistoryRepository {
  private repository: Repository<UserMedicalHistory>;

  constructor() {
    this.repository = AppDataSource.getRepository(UserMedicalHistory);
  }

  async create({
    user_id,
    height,
    weight,
    pregnant,
    illnesses
  }: ICreateUserMedicalHistoryDTO): Promise<UserMedicalHistory> {
    const userMedicalHistory = new UserMedicalHistory()

    Object.assign(userMedicalHistory, {
      user_id,
      height,
      weight,
      pregnant,
      illnesses
    })

    return this.repository.save(userMedicalHistory)
  }

  // async findByEmail(email: string): Promise<User> {
  //   return this.repository.findOn({ email });
  // }

  // async findById(id: string): Promise<User> {
  //   return this.repository.findOne(id);
  // }
}

export { UserMedicalHistoryRepository };
