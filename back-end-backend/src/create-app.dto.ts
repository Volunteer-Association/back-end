/*
 * @Author: chenguihui
 * @Date: 2023-07-08 00:30:54
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-07-08 00:51:56
 * @Description: 头部注释
 * @filePath: Do not edit
 */
import { ApiProperty } from '@nestjs/swagger';
import * as os from 'node:os';
import 'Multer';

export class CreateAppDto {}

export class Parameter {
  @ApiProperty({ required: false, default: 'id'})
  id?: string;

  @ApiProperty({ required: false, default: '字节码'})
  memory?: string;
}

export class SystemResource<T> {
  cpu: os.CpuInfo[];
  memory: {
    size: number;
    usedSize: number;
    veSize: number;
  };
  arch: string;
  EOL: string;
  constants: any;
  endianness: string;
  homedir: string;
  hostname: string;
  loadavg: number[];
  networkInterfaces: NodeJS.Dict<os.NetworkInterfaceInfo[]>;
  platform: string;
  release: string;
  tmpdir: string;
  type: string;
  uptime: number;
  userInfo: os.UserInfo<string>;
}

export class FilesUploadDto {
  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  files: Array<Express.Multer.File>;
}

export class FilesParameter {
  id?: string;
  memory?: string;
}
