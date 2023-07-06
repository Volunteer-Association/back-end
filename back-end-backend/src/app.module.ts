/*
 * @Author: chenguihui
 * @Date: 2023-07-04 01:20:37
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-07-06 09:10:20
 * @Description: 头部注释
 * @filePath: Do not edit
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoModule } from './demo/demo.module';
import { LoginModule } from './auth/login/login.module';
import { RegisterModule } from './auth/register/register.module';

@Module({
  imports: [DemoModule, LoginModule, RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
