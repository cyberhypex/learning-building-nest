import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{abortOnError:false});
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
