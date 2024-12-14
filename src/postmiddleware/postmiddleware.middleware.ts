import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request,Response } from 'express';

@Injectable()
export class PostmiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const {user_id,title,content,slug}=req.body
    if(!user_id || !title || !content || !slug){
     return res.status(400).send("Malumot yetarli emas!!!")  
      }
    next();
  }
}
