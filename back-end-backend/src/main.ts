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
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import fs from 'fs';
import Config from '../config/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

/** 初始化配置文件 */
function CreatConfig() {
  try {
    fs.mkdirSync("./config")
  } catch (error) {
     
  }
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'debug', 'log', 'warn'],
  });
  // 配置cors
  app.enableCors();
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
