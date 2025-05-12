import { Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repo';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entity/user.entity';
import { error } from 'console';

@Injectable()
export class UserService {
  constructor(private userRepo: UserRepository) {}

  async createUser(req: any): Promise<any> {
    try {
      const entity = new UserEntity();
      entity.name = req.name;
      entity.age = req.age;
      entity.email = req.email;
      entity.gender = req.gender;
      entity.married = req.married;

      const result = await this.userRepo.save(entity);
      if (result) {
        return result;
      } else {
        return error;
      }
    } catch (err) {
      console.log(err);
    }
  }

  async getAllUsers(): Promise<any> {
    try {
      const result = await this.userRepo.find();
      if (result) {
        return result;
      } else {
        return error;
      }
    } catch (err) {
      console.log(err); 
    }
  }

  async updateUser(req: any): Promise<any> {
    try {
      const result = await this.userRepo.update(
        { id: req.id },
        { name: req.name, age: req.age, email: req.email, gender: req.gender, married: req.married},
      );
      if (result) {
        return result;
      } else {
        return error;
      }
    } catch (err) {
      console.log(err);
    }
  }

  async deleteUser(req:any):Promise<any>{
    try{   
      const result = await this.userRepo.delete({id:req.id})
    } catch(err){
      return err;
    }
  }
}
