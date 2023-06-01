/*
 * @Author: chenguihui
 * @Date: 2023-05-26 00:25:58
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-26 19:30:31
 * @Description: 公共模块
 * @filePath: Do not edit
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import Connect from '../mysql/connect';

@Module({
  imports: [Connect, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
