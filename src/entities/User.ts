import { Entity, ObjectIdColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
class User {
  @ObjectIdColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  birthdate: Date

  @Column()
  gender: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  created_at: Date;

  // @Column(type => UserMedicalHistory)
  // medicalHistory: UserMedicalHistory;


}

export { User }
