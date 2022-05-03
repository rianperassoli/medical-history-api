import { v4 as uuid } from 'uuid'
import { Entity, ObjectIdColumn, Column } from "typeorm";

@Entity()
class Illness {
  @ObjectIdColumn()
  id: string;

  @Column()
  name: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Illness };
