import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from 'src/schema/comment.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentmodel: Model<Comment>,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<string> {
    try {
      const result=this.commentmodel.create(createCommentDto);
      (await result).save()
      return 'Comment yaratildi';
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      const res=await this.commentmodel.find()
      if(res.length>=1){
        return res
      }
      return "Commentlar topilmadi"
    } catch (error) {
      return error.message
    }
  }

  async findOne(id: string) {
    try {
      const res=await this.commentmodel.findOne({_id:id})
      if(!res){
        return "Comment topilmadi"
      }
      return res
    } catch (error) {
      return error.message
    }
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    try {
      const res=await this.commentmodel.findOne({_id:id})
      if(!res){
        return "Yangilanadigan Comment topilmadi"
      }
      await this.commentmodel.findByIdAndUpdate({_id:id,updateCommentDto})
      return "Comment yangilandi"
    } catch (error) {
      return error.message
    }
  }

  async remove(id: string) {
    try {
      const res=await this.commentmodel.findOne({_id:id})
      if(!res){
        return "O'chiriladigan Comment topilmadi"
      }
      await this.commentmodel.findByIdAndDelete({_id:id})
      return "Comment o'chirildi"
    } catch (error) {
      return error.message
    }  }
}
