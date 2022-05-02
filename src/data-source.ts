import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: "mongodb+srv://medicalhistoryapi:medicalhistoryapi@medicalhistory.ti3mp.mongodb.net/medicalhistory?retryWrites=true&w=majority",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
