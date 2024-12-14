import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class CommentmiddlewareMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const {user_id,post_id,content}=req.body
    if(!user_id || !post_id || !content){
      return res.status(200).send("Malumot to'liqmas")
    }
    next();
  }
}
