import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService implements OnModuleInit {
  
  constructor(@Inject('USER_SERVICE') private readonly client:ClientKafka){}

 async onModuleInit() {
    this.client.subscribeToResponseOf('create_user');
    this.client.subscribeToResponseOf('find_all_users');
    this.client.subscribeToResponseOf('find_one_users');
    this.client.subscribeToResponseOf('update_user');
    this.client.subscribeToResponseOf('remove_user');

    await this.client.connect(); 
  }


  async create(user):Promise<any>{
    return await firstValueFrom(this.client.send('create_user',user))
  }


  async findAll():Promise<any[]>{
    return await firstValueFrom(this.client.send('find_all_users',{}))
  }


  async findOne(id):Promise<any>{
    return await firstValueFrom(this.client.send('find_one_users',id))
  }

  async update(id,userUpdateDto):Promise<any>{
    return await firstValueFrom(this.client.send('update_user',{id,userUpdateDto}))
  }
  

  async remove(id):Promise<any>{
    return await firstValueFrom(this.client.send('remove_user',id))
  }
  
}
