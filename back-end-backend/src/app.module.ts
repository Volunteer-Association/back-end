/*
 * @Author: chenguihui
 * @Date: 2023-05-26 00:25:58
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-26 01:52:44
 * @Description: 公共模块
 * @filePath: Do not edit
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Connect from '../mysql/connect';

@Module({
  imports: [Connect],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
