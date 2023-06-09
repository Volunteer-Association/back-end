/*
 * @Author: chenguihui
 * @Date: 2023-05-26 00:25:58
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-06-01 13:34:05
 * @Description: 主入口
 * @filePath: Do not edit
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import Config from '../config/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'), {
    prefix: Config.serverOptions.baseUrl, //设置虚拟路径
  });
  await app.listen(
    Config.serverOptions.port,
    Config.serverOptions.hostIP,
    () => {
      console.log(
        `服务器启动成功：${Config.serverOptions.host}:${Config.serverOptions.port}`,
      );
    },
  );
}
bootstrap();
