import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiBody } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post('/createUser')
  @ApiBody({ type: UserDto })
  async createUser(@Body() req: any): Promise<any> {
    try {
      return await this.service.createUser(req);
    } catch (err) {
      console.log(err);
    }
  }

  @Post('/getAllUsers')
  async getAllUsers(): Promise<any> {
    try {
      return await this.service.getAllUsers();
    } catch (err) {
      console.log(err);
    }
  }

  @Post('/updateUser')
  @ApiBody({ type: UserDto })
  async updateUser(@Body() req: any): Promise<any> {
    try {
      return await this.service.updateUser(req);
    } catch (err) {
      return err;
    }
  }

  @Post('/deleteUser')
  @ApiBody({type:UserDto})
  async deleteUser(@Body() req:any): Promise<any>{
    try{
      return await this.service.deleteUser(req);
    } catch (err) {
      return err;
    }
  }
}
