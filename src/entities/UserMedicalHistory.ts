import { Entity, Column, CreateDateColumn, RelationId, ManyToOne, JoinColumn } from "typeorm";
import { Illness } from "./Illness";
import { User } from "./User";

@Entity()
class UserMedicalHistory {
  @ManyToOne(type => User, user => user)
  @JoinColumn({ name: 'user_id' })
  public user: User;

  @Column()
  public user_id: string;

  @Column()
  height: number;

  @Column()
  weight: number;

  @Column()
  pregnant: boolean;

  @Column(type => Illness)
  illnesses: Illness[];

  @CreateDateColumn()
  created_at: Date;
}

export { UserMedicalHistory };
