import { ICreateUserDTO } from "../DTOs/ICreateUserDTO";
import { User } from "../entities/User";

interface IUserRepository {
  create(data: ICreateUserDTO): Promise<User>
  findByEmail(email: string): Promise<User>
  findAll(): Promise<User[]>
}

export { IUserRepository };
