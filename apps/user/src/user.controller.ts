import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  

  @EventPattern('create_user')
  async create(@Payload() data:any):Promise<any>{
      return await this.userService.create(data)
  }


  @EventPattern('find_all_users')
  async findAll():Promise<any[]>{
    return await this.userService.findAll()
  }

  @EventPattern('find_one_users')
  async findOne(@Payload() id:string):Promise<any>{
    return await this.userService.findOne(id)
  }


  @EventPattern('update_user')
  async update(@Payload() data:any):Promise<any>{
    const {id,updateUserDto} = data.value
    return await this.userService.Update(id,updateUserDto)
  }


  
  @EventPattern('remove_user')
  async delete(@Payload() id:string):Promise<any>{
    return await this.userService.Delete(id)
  }
  
}
