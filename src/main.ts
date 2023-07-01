import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';
import { EnvKey } from './constants/config';
import { GlobalExceptionFilter } from './errors/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.enableCors({
    credentials: true,
    origin: configService.get(EnvKey.CLIENT_BASE_URL),
  });

  app.use(cookieParser());

  app.setGlobalPrefix(configService.get(EnvKey.BASE_PATH));

  app.useGlobalFilters(new GlobalExceptionFilter());

  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Documents')
    .setDescription('Document for server api')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(
    configService.get(EnvKey.DOCS_PATH),
    app,
    swaggerDocument,
    {
      swaggerOptions: { withCredentials: true },
    },
  );

  await app.listen(configService.get(EnvKey.PORT));
}
bootstrap();
