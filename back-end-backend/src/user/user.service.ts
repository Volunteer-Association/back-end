/*
 * @Author: chenguihui
 * @Date: 2023-05-26 15:28:51
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-26 18:31:48
 * @Description: 
 * @filePath: Do not edit
 */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return JSON.stringify(createUserDto);
  }

  findAll() {
    const username = ''
    const password = ''

    function ducan(a: number, b: number) {
      return a + b
    }

    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
