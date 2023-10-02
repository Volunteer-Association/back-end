/*
 * @Author: chenguihui
 * @Date: 2023-07-04 01:20:37
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-07-07 12:12:28
 * @Description: 头部注释
 * @filePath: Do not edit
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import Connect from '../mysql/connect';
import { DemoModule } from './demo/demo.module';
import { LoginModule } from './auth/login/login.module';
import { RegisterModule } from './auth/register/register.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', '.env.dev', '.env.prod'],
    }),
    Connect,
    DemoModule,
    LoginModule,
    RegisterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
