import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req=context.switchToHttp().getRequest()
    const {name}=req.body
    if(typeof name=='string'){
      name.trim()
    }
    return next.handle();
  }
}
