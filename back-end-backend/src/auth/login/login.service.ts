/*
 * @Author: chenguihui
 * @Date: 2023-07-06 11:42:20
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-07-08 05:52:12
 * @Description: 头部注释
 * @filePath: Do not edit
 */
import { Injectable } from '@nestjs/common';
import { CreateLoginDto, GiteeAuthorizedDto } from './dto/create-login.dto';

@Injectable()
export class LoginService {

  create(createLoginDto: CreateLoginDto) {
    console.log(createLoginDto);
    return 'This action adds a new login';
  }

  GiteeAuthorized(Code: CreateLoginDto): GiteeAuthorizedDto {
    return {

    };
  }
}
