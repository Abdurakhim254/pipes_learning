import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Post} from "../schema/post.schema"

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private Postmodel: Model<Post>) {}

  async create(createPostDto: CreatePostDto):Promise<string> {
    try {
      const res=this.Postmodel.create(createPostDto);
      (await res).save
      return "Post yaratildi"
    } catch (error) {
      return error.message
    }
  }

 async findAll():Promise<string|Object[]> {
    try {
      const res=await this.Postmodel.find()
      if(res.length>=1){
        return res
      }

      return "Postlar topilmadi"
    } catch (error) {
      return error.message
    }
  }

  async findOne(id:string):Promise<string|Object> {
    try {
      const res=await this.Postmodel.findOne({_id:id})
      if(!res){
        return "Post topilmadi"
      }
      return res
    } catch (error) {
      return error.message
    }
  }

  async update(id:string, updatePostDto: UpdatePostDto):Promise<string> {
    try {
      const res=await this.Postmodel.findOne({_id:id})
      if(!res){
        return "Yangilandigan Post topilmadi"
      }
      await this.Postmodel.findByIdAndUpdate({_id:id,updatePostDto})
      return "Post yangilandi"
    } catch (error) {
      return error.message
    }
  }

   async remove(id:string):Promise<string> {
    try {
      const res=await this.Postmodel.findOne({_id:id})
      if(!res){
        return "O'chiriladigan Post topilmadi"
      }
      await this.Postmodel.findByIdAndDelete({_id:id})
      return "Post O'chirildi"
    } catch (error) {
      return error.message
    }
  }
}
