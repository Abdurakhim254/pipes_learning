import { HttpException } from "@nestjs/common";

export class UnauthorizedException extends HttpException{
    constructor(
        message:string,
        statusCode:number
    ){
    super(message,statusCode)        
    }
}