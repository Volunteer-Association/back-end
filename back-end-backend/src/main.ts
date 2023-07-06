/*
 * @Author: chenguihui
 * @Date: 2023-07-04 01:20:37
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-07-06 09:11:22
 * @Description: 头部注释
 * @filePath: Do not edit
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express'
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    logger: ['error', 'debug', 'log', 'warn']
  });
  app.enableCors();
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: "/static/file"
  })
  await app.listen(3000, () => {
    console.log("服务器开启成功")
  });
}
bootstrap();
