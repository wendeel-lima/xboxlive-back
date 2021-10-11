import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors: true
  });
  await app.listen(3000)
  console.log(`app rodando em http://localhost:3000`);
}
bootstrap();
