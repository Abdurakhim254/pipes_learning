import {IsString,IsUUID,IsNotEmpty,MinLength} from 'class-validator'
export class CreatePostDto {
    @IsUUID()
    user_id:string
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title:string
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    content:string
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    slug:string
}
