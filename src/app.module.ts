import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass',
      database: 'mydb',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // src 안에 뒤져서 .entity로 끝나는 파일을 다 잡아와라(빌드시 js로 바뀌니까 js도 포함)
      synchronize: true, // 개발 환경에서만!
      logging: true, // 쿼리 로그 출력
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
