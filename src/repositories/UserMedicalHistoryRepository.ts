import { Repository } from "typeorm";

import { AppDataSource } from "../db/data-source";
import { UserMedicalHistory } from "../entities/UserMedicalHistory";
import { ICreateUserMedicalHistoryDTO } from "../DTOs/ICreateUserMedicalHistoryDTO";
import { IUserMedicalHistoryRepository } from "./IUserMedicalHistoryRepository";

class UserMedicalHistoryRepository implements IUserMedicalHistoryRepository{
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
    let medicalHistory = await this.findByUser(user_id)

    if (!medicalHistory) {
      medicalHistory = new UserMedicalHistory()
    }

    Object.assign(medicalHistory, {
      user_id,
      height,
      weight,
      pregnant,
      illnesses
    })

    return this.repository.save(medicalHistory)
  }

  async findByUser(user_id: string): Promise<UserMedicalHistory> {
    return this.repository.findOneBy({ user_id });
  }
}

export { UserMedicalHistoryRepository };
