import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BadrequestException } from 'src/exception/bad.exception';



@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto:CreateUserDto):Promise<string> {
    try {
      return this.usersService.create(createUserDto);
    } catch (error) {
      throw new BadrequestException(error.message,400)
    }
  }

  @Get()
  findAll() :Promise<string|Object[]>{
 try {
     return this.usersService.findAll();
 } catch (error) {
  throw new BadrequestException(error.message,404)
 }
  }

  @Get(':id')
  findOne(@Param('id') id: string) :Promise<string|Object>{
try {
      return this.usersService.findOne(id);
  
} catch (error) {
  throw new BadrequestException(error.message,401)
}  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) :Promise<string>{
try {
      return this.usersService.update(id, updateUserDto);
  
} catch (error) {
  throw new BadrequestException(error.message,401)

}  }

  @Delete(':id')
  remove(@Param('id') id: string) {
try {
      return this.usersService.remove(id);
  
} catch (error) {
  throw new BadrequestException(error.message,401)
}  }
}
