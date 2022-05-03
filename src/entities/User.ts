import { Entity, ObjectIdColumn, Column, CreateDateColumn, ObjectID, PrimaryColumn, Index } from "typeorm";
import { UserMedicalHistory } from "./UserMedicalHistory";

@Entity()
class User {
  @ObjectIdColumn()
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  birthdate: Date

  @Column()
  gender: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  @Column(type => UserMedicalHistory)
  medicalHistory: UserMedicalHistory;
}

export { User }
