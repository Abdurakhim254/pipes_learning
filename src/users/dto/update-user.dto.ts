import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    first_name?: string;
    email?: string;
    password?: string;
    last_name?: string;
    age?:number
}
