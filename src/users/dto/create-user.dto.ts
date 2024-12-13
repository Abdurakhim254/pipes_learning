import {
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,
    IsStrongPassword,
    MinLength,
  } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    first_name:string
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    last_name:string
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    @MinLength(3)
    email:string
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    password:string
    @IsNumber()
    @MinLength(5)
    age:number
}
