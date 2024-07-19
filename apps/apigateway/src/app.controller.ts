import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  async create(@Body() user:any):Promise<any>{
     return await this.appService.create(user)
  }


  @Get()
  async findAll():Promise<any[]>{
    return await this.appService.findAll()
  }

  
  @Get(':id')
  async findOne(@Param('id') id:string):Promise<any>{
    return await this.appService.findOne(id)
  }
 
  @Put(':id')
 async update(@Param()id:string ,userUpdateDto:any):Promise<any>{
    return await this.appService.update(id,userUpdateDto)
  }
  
   
  @Delete(':id')
  async remove(@Param() id:string):Promise<any>{
    return await this.appService.remove(id)
  }
}
