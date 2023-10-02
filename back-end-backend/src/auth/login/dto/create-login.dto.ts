/*
 * @Author: chenguihui
 * @Date: 2023-07-06 11:42:20
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-07-08 06:32:44
 * @Description: 头部注释
 * @filePath: Do not edit
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateLoginDto {
  @ApiProperty({ required: false, default: '' })
  username: string;

  @ApiProperty({ required: false, default: '' })
  password: string;

  @ApiProperty({ required: false, default: false })
  remember: boolean;

  @ApiProperty({ required: false, default: '' })
  code: string;
}

export class GiteeAuthorizedDto {
  access_token?: string;
  token_type?: string;
  expires_in?: string;
  refresh_token?: string;
  scope?: string;
  created_at?: string
}
