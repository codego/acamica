import { Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn } from 'typeorm';
import { PaymentMethod } from './PaymentMethod';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(type => PaymentMethod, paymentMethod => PaymentMethod.student)
  paymentMethod: PaymentMethod[];
  
  @UpdateDateColumn({
    type: 'timestamp',
  })
  createdAt: number;
}
