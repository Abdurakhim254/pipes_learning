import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User,Userschema } from 'src/schema/user.schema';
import { UsermiddlewareMiddleware } from 'src/usermiddleware/usermiddleware.middleware';
import { AuthGuard } from 'src/Guards/authguard';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[MongooseModule.forFeature([{name:User.name,schema:Userschema}]),
  JwtModule.register({
    global:true,
    secret:'qwer12345',
    signOptions:{
      expiresIn:'10min'
    }
  })
],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UsermiddlewareMiddleware).exclude({path:"users",method:RequestMethod.POST},{path:"users",method:RequestMethod.PUT})
  }
}
