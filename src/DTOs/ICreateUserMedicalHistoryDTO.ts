import { Illness } from "../entities/Illness";

interface ICreateUserMedicalHistoryDTO {
  user_id?: string;
  height: number;
  weight: number;
  pregnant: boolean;
  illnesses: Illness[];
}

export { ICreateUserMedicalHistoryDTO };
