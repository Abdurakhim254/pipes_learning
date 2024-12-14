import {IsString,IsUUID,IsNotEmpty,MinLength} from 'class-validator'
export class CreateCommentDto {
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    @MinLength(6)
    user_id:string
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    @MinLength(6)
    post_id:string
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    content:string
}
