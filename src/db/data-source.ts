import { DataSource } from "typeorm"
import { Illness } from "../entities/Illness"
import { User } from "../entities/User"
import { UserMedicalHistory } from "../entities/UserMedicalHistory"

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: "mongodb+srv://medicalhistoryapi:medicalhistoryapi@medicalhistory.ti3mp.mongodb.net/medicalhistory?retryWrites=true&w=majority",
    synchronize: true,
    logging: false,
    useUnifiedTopology: true,
    entities: [User, UserMedicalHistory, Illness],
    migrations: [],
    subscribers: [],
})
