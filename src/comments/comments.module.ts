import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment,Commentschema } from 'src/schema/comment.schema';


@Module({
  imports:[MongooseModule.forFeature([{name:Comment.name,schema:Commentschema}])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
