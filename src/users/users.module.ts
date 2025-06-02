import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // 사용할 모듈에 임포트
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
