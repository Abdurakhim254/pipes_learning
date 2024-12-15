import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {User} from "../schema/user.schema"
import { InjectModel } from '@nestjs/mongoose';
import {Model} from "mongoose"
import { JwtService } from '@nestjs/jwt';
// export type user={
//   first_name:string,
//   last_name:string,
//   email:string,
//   password:string
// }

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private usermodel:Model<User>,
  private jwtService: JwtService
  )
  {
  }
  async create(createUserDto:CreateUserDto ) {
    try {
     const result=await this.usermodel.findOne({email:createUserDto.email})
     if(!createUserDto.role){
      createUserDto.role='user'
     }
     const roles=['admin','superadmin','user']
     if(!roles.includes(createUserDto.role)){
        return "Role xato kiritlgan"
     }
     const payload={sub:createUserDto.email,role:createUserDto.role}
     if(!result){
      const res=this.usermodel.create(createUserDto);
      (await res).save()
      return {msg:"Malumot yozildi",
      accessToken:await this.jwtService.signAsync(payload)
      } 
     }
     
     return "Bu foydalanuvchi allaqachon ro'yxatdan o'tgan"
    } catch (error) {
      return error.message
    }
  }

 async findAll():Promise<string|Object[]> {
    try {
      const res:Object[]=await this.usermodel.find()
      if(res.length>=1){
        return res
      }
      return "Foydalanuvchilar topilmadi"
    } catch (error) {
      return error.message
    }
  }

  async findOne(id: string) :Promise<string|Object[]>{
    try {
      const res:Object[]=await this.usermodel.findOne({_id:id})
      if(!res){
        return "Foydalanuvchi topilmadi"
      }
      return res
    } catch (error) {
      return error.message
    }
  }

  async update(id: string, updateUserDto: UpdateUserDto):Promise<string> {
  try {
    await this.usermodel.findByIdAndUpdate({_id:id,updateUserDto})
    return "Foydalanuvchi yangilandi"
  } catch (error) {
    return error.message
  }
  }

 async remove(id: string):Promise<string> {
    try {
      await this.usermodel.findOneAndDelete({_id:id})
      return "User o'chirildi"
    } catch (error) {
      return error.message
    }
  }
}
