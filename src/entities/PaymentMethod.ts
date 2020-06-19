import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Student } from '../entities/Student';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Student, student => student.posts)
  student: Student;
}
