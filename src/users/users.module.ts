import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User,Userschema } from 'src/schema/user.schema';

@Module({
  imports:[MongooseModule.forFeature([{name:User.name,schema:Userschema}])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
