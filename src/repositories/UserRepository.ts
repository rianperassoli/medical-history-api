import { ObjectID, Repository } from "typeorm";

import { ICreateUserDTO } from "../DTOs/ICreateUserDTO";

import { User } from "../entities/User";
import { AppDataSource } from "../db/data-source";

class UserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getMongoRepository(User);
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

    return this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.findOneBy({ email });
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }

}

export { UserRepository };
