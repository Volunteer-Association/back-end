/*
 * @Author: chenguihui
 * @Date: 2023-07-04 01:20:37
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-07-08 05:48:43
 * @Description: 头部注释
 * @filePath: Do not edit
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import Config from '../config/config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'debug', 'log', 'warn'],
  });
  // 配置cors
  app.enableCors({
    origin: Config.hostOptions,
  });
  // 配置静态资源
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: Config.serverOptions.baseUrl,
  });
  // 配置swagger
  const _swagger = new DocumentBuilder()
    .setTitle("Cats example")
    .setDescription("The cats API description")
    .setVersion("1.0.0")
    .addTag("cats")
    .build();
  const _document = SwaggerModule.createDocument(app, _swagger);
  SwaggerModule.setup('/api/', app, _document);
  // 监听服务器
  await app.listen(
    Config.serverOptions.port,
    Config.serverOptions.hostIP,
    () => {
      console.log(
        `服务器开启成功：${Config.serverOptions.host}:${Config.serverOptions.port}`,
      );
    },
  );
}
bootstrap();
