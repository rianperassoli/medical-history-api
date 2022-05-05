import { ObjectID, Repository } from "typeorm";

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

  async findByUser(user_id: ObjectID): Promise<UserMedicalHistory> {
    console.log(String(user_id));
    
    return this.repository.findOneBy({ user_id: String(user_id) });
  }
}

export { UserMedicalHistoryRepository };
