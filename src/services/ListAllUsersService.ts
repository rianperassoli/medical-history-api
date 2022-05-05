import { IResponseUserDTO } from "../DTOs/IResponseUserDTO";
import { UserRepository } from "../repositories/UserRepository";

class ListAllUsersService {
  async execute(): Promise<IResponseUserDTO[]> {
    const userRepository = new UserRepository()

    const users = await userRepository.findAll();

    const usersToReturn: IResponseUserDTO[] = users.map(user => {
      const fullname = `${user.first_name} ${user.last_name}`

      delete user.id
      delete user.first_name
      delete user.last_name
      delete user.phone

      return { ...user, fullname }
    })

    return usersToReturn
  }
}

export { ListAllUsersService };
