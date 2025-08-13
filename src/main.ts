import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ProductoExceptionFilter } from './productos/filters/producto-exception.filter/producto-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new ProductoExceptionFilter)
  app.useGlobalPipes(new ValidationPipe);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
