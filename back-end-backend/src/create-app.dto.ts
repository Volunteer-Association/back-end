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
  id?: string;
  memory?: string;
}

export class SystemResource {
  cpu: os.CpuInfo[];
  memory: {
    size: number;
    usedSize: number;
    veSize: number;
  };
  osnd1: string;
  ddf2: string;
  ada3: any;
  udnd4: string;
  zsd5: string;
  asw6: string;
  asiw7: number[];
  yea8: NodeJS.Dict<os.NetworkInterfaceInfo[]>;
  ienc9: string;
  seus10: string;
  caes11: string;
  ddaa12: string;
  xzaa13: number;
  iyda14: os.UserInfo<string>;
  sdas15?: number;
  udaa16?: string;
  sdfa17?: number;
}

export class FilesUploadDto {
  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  files: Array<Express.Multer.File>;
}

export class FilesParameter {
  id?: string;
  memory?: string;
}
