import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //   ** import ConfigModule in app module to use env
  const PORT = process.env.APP_PORT || 3001;
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Agent Service')
    .setDescription('The Agent Service APIs description')
    .setVersion('v1.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('agent-service', app, document);
  await app.listen(PORT, () => {
    console.info(`App running on port: ${PORT}`);
    console.log(`Api document on: http://localhost:${PORT}/agent-service#/`);
  });
}
bootstrap();
