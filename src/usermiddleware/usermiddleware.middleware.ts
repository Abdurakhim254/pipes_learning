import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request,Response } from 'express';

@Injectable()
export class UsermiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const {first_name,last_name,email,password,age}=req.body
    if(!last_name || !first_name || !email || !password ){
      res.status(400).send("Malumot toliqmas")
    }

    if(!(age>0) || !(typeof(age)=='number')){
      res.status(400).send("Malumot toliqmas")
    }
    next();
  }
}
