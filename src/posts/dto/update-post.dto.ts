import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

export class UpdatePostDto extends PartialType(CreatePostDto) {
    user_id: string;
    title?: string;
    content?: string;
    slug?: string;
}
