import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './exception/http.exception';

async function bootstrap() {
try {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3000);
} catch (error) {
  throw new HttpExceptionFilter()
}
}
bootstrap();
