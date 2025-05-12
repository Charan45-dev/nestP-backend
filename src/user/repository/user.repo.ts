import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entity/user.entity';
import { DataSource, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  private dataSource: DataSource;

  constructor(
    @InjectRepository(UserEntity)
     private userRepo: Repository<UserEntity>,
  ) {
    super(userRepo.target, userRepo.manager, userRepo.queryRunner);
 }

}
