import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from "express";
import { JwtService } from "@nestjs/jwt";
import { UnauthorizedException } from "src/exception/unauthorized.exception";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private jwtservice:JwtService){}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req:Request=context.switchToHttp().getRequest()
        const [type ,token]=req.headers.authorization.split(' ')
        const roles:string[]=['admin','superadmin']
        if(type==='Bearer' && token){
            const data=await this.jwtservice.decode(token)
            if(roles.includes(data.role)){
                return true
            }
        }
        return false
    }
}