import { HttpException } from "@nestjs/common";

export class BadrequestException extends HttpException{
    constructor(
        message:string,
        statusCode:number
    ){
    super(message,statusCode)        
    }
}