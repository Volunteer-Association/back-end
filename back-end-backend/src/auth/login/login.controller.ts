/*
 * @Author: chenguihui
 * @Date: 2023-07-06 11:42:20
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-07-08 06:42:29
 * @Description: 头部注释
 * @filePath: Do not edit
 */
import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { ApiBearerAuth, ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('auth-controller')
@Controller('auth/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiOperation({ summary: "用户登录" })
  @ApiResponse({ status: 200, description: '响应体', type: CreateLoginDto })
  @ApiBody({ required: false, type: CreateLoginDto })
  create(@Body() createLoginDto: CreateLoginDto): string {
    return this.loginService.create(createLoginDto);
  }

}
