import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, Postschema } from 'src/schema/post.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:Post.name,schema:Postschema}])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
