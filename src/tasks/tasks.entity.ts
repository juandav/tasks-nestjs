import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Tasks {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 200 })
  description: string;
  @Column({ type: 'varchar', length: 20 })
  priority: string;
}
