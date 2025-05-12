import { Module } from '@nestjs/common';
import { UserEntity } from './entity/user.entity';
import { UserController } from './user.controller';
import { UserRepository } from './repository/user.repo';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserRepository, UserService],
})
export class UserModule {}
