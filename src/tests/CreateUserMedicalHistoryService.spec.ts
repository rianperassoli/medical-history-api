import { ICreateUserMedicalHistoryDTO } from "../DTOs/ICreateUserMedicalHistoryDTO"
import { AppError } from "../errors/AppError"
import { UserMedicalHistoryRepositoryInMemory } from "../repositories/inMemory/UserMedicalHistoryRepositoryInMemory"
import { CreateUserMedicalHistoryService } from "../services/CreateUserMedicalHistoryService"

let repository: UserMedicalHistoryRepositoryInMemory
let service: CreateUserMedicalHistoryService

describe("Create User Medical History", () => {

  beforeEach(async () => {
    repository = new UserMedicalHistoryRepositoryInMemory()
    service = new CreateUserMedicalHistoryService(repository)
  })

  it('should be able to create a new medical history', async () => {
    const medicalHistory: ICreateUserMedicalHistoryDTO = {
      user_id: "asa13123d123",
      height: 20,
      weight: 120,
      pregnant: true,
      illnesses: ['AIDS', 'Lepra']
    }

    const newMedicalHistory = await service.execute(medicalHistory)

    expect(newMedicalHistory).toHaveProperty("id");
  })

  it('should not be able to create a new medical history without user_id', async () => {
    const medicalHistory: ICreateUserMedicalHistoryDTO = {
      height: 20,
      weight: 120,
      pregnant: true,
      illnesses: ['AIDS', 'Lepra']
    }

    await expect(service.execute(medicalHistory)).rejects.toEqual(
      new AppError("User id is required")
    );
  })

})