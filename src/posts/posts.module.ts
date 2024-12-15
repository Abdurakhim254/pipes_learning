import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, Postschema } from 'src/schema/post.schema';
import { PostmiddlewareMiddleware } from 'src/postmiddleware/postmiddleware.middleware';
import { AuthGuard } from 'src/Guards/authguard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: Postschema }]),
  ],
  controllers: [PostsController],
  providers: [PostsService, AuthGuard],
})
export class PostsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PostmiddlewareMiddleware)
      .exclude(
        { path: 'posts', method: RequestMethod.POST },
        { path: 'posts', method: RequestMethod.PUT },
      );
  }
}
