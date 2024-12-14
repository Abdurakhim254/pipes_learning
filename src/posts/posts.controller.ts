import { Controller, Get, Post, Body, Param, Delete, Put, BadRequestException } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { BadrequestException } from 'src/exception/bad.exception';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) :Promise<string>{
try {
      return this.postsService.create(createPostDto);
  
} catch (error) {
  throw new BadrequestException(error.message,409)
}  }

  @Get()
  findAll() :Promise<string|Object[]>{
try {
      return this.postsService.findAll();
  
} catch (error) {
    throw new BadRequestException(error.message)
}  }

  @Get(':id')
  findOne(@Param('id') id: string):Promise<string|Object> {
try {
      return this.postsService.findOne(id);
  
} catch (error) {
  throw new BadrequestException(error.message,401)

}  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
try {
      return this.postsService.update(id, updatePostDto);
  
} catch (error) {
  throw new BadrequestException(error.message,401)

}  }

  @Delete(':id')
  remove(@Param('id') id: string):Promise<string> {
try {
      return this.postsService.remove(id);
  
} catch (error) {
  throw new BadrequestException(error.message,401)

}  }
}
