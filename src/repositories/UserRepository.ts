import { Repository } from "typeorm";

import { ICreateUserDTO } from "../DTOs/ICreateUserDTO";

import { User } from "../entities/User";
import { AppDataSource } from "../db/data-source";
import { UserMedicalHistory } from "../entities/UserMedicalHistory";

class UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
  }

  async create({
    email,
    first_name,
    last_name,
    gender,
    birthdate,
    phone
  }: ICreateUserDTO): Promise<User> {
    const user = new User()

    Object.assign(user, {
      email,
      first_name,
      last_name,
      gender,
      birthdate,
      phone
    })

    return await this.repository.save(user);
  }

  // async findByEmail(email: string): Promise<User> {
  //   return this.repository.findOn({ email });
  // }

  // async findById(id: string): Promise<User> {
  //   return this.repository.findOne(id);
  // }
}

export { UserRepository };
