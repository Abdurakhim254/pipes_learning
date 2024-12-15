import { Controller, Get, Post, Body, Put, Param, Delete,UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { BadrequestException } from 'src/exception/bad.exception';
import { AuthGuard } from 'src/Guards/authguard';


@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  
  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createCommentDto: CreateCommentDto):Promise<string> {
try {
      return this.commentsService.create(createCommentDto);
  
} catch (error) {
  throw new BadrequestException(error.message,401)

}  }

  @Get()
  findAll():Promise<string|Object[]> {
try {
      return this.commentsService.findAll();
  
} catch (error) {
  throw new BadrequestException(error.message,401)

}  }

  @Get(':id')
  findOne(@Param('id') id: string):Promise<string|Object> {
try {
      return this.commentsService.findOne(id);
  
} catch (error) {
  throw new BadrequestException(error.message,401)

}  }
  
  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto):Promise<string> {
try {
      return this.commentsService.update(id, updateCommentDto);
  
} catch (error) {
  throw new BadrequestException(error.message,401)

}  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string):Promise<string> {
try {
      return this.commentsService.remove(id);
  
} catch (error) {
  throw new BadrequestException(error.message,401)

}  }
}
