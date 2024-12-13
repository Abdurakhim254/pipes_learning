import { Module } from '@nestjs/common';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [CommentsModule, PostsModule, UsersModule,MongooseModule.forRoot("mongodb://localhost:27017/test")],

})
export class AppModule {}
