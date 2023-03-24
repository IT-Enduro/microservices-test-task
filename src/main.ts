import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();
  const port = 8080;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  logger.log(`App is running on port ${port}`);
}
bootstrap();
