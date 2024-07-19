import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  private users = [
    {id:1,name:'Alex',email:'alex@gmail.com',age:24},
    {id:2,name:'Jerry',email:'jerry@gmail.com',age:25}
  ];


   create(user):Promise<any>{
      return new Promise((resolve)=>{
         this.users.push(user)
         resolve(user)
      });
  }

    findAll():Promise<any[]>{
    return  new Promise((resolve)=>{
       resolve(this.users)
    });
  }

   findOne(id):Promise<any>{
    return new Promise((resolve,reject)=>{
      let user = this.users.find(i=>i.id === id);
      if(!user){
         reject(`user not found with id ${id}`)
      }
      resolve(user)
    });
  }

  Update(id,updateUserDto):Promise<any>{
      return new Promise((resolve,reject)=>{
        const user = this.users.find(i=>i.id === id)
        if(user){
          Object.assign(user,updateUserDto)
          resolve(user)
        }
        reject(`user not found with id ${id}`)
      });
  }

  Delete(id):Promise<any>{
     return new Promise((resolve,reject)=>{
       const idx =  this.users.findIndex(i=>i.id === id);
       if(idx !== -1){
        const [removedUser] = this.users.splice(idx,1)
        resolve(removedUser)
       }
       reject(`user not found with id ${id}`)
     });
  }


}
