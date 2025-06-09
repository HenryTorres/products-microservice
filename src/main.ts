import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';
import { environmentVars } from './config/envs';

async function bootstrap() {
  // Creamos el servidor
  const app = await NestFactory.create(AppModule);

  // Habilita las validaciones
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );

  // Lanzamos el servidor
  await app.listen(environmentVars.PORT, environmentVars.HOST);

  console.log('Servidor ejecutandose en el puerto:' + environmentVars.PORT);
}
bootstrap();
