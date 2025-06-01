import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import 'dotenv/config';

async function bootstrap() {
  // Creamos el servidor
  const app = await NestFactory.create(AppModule);

  // Lanzamos el servidor
  await app.listen(process.env.PORT ?? 3000, process.env.HOST ?? 'localhost');

  console.log('Servidor ejecutandose en el puerto:' + process.env.PORT);
}
bootstrap();
