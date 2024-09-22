import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const { PORT } = process.env;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  try {
    await app.listen(PORT , () => console.log(`Running on PORT ${PORT}`));
  } catch (err) {
    console.log(err);
  }


  //await app.listen(3000);
}
bootstrap();
