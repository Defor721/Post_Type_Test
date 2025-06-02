import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn() // 기본 키 역할. 자동 처리됨(auto-increment)
  id: number;

  @Column({ length: 12 }) // 길이 제한
  name: string;

  @Column({ unique: true }) // 이메일값. 고유해야 함.
  email: string;

  @Column()
  password: string;

  @CreateDateColumn() // 자동 타임스탬프
  createdAt: Date;

  @UpdateDateColumn() //자동 타임스탬프
  updatedAt: Date;
}
