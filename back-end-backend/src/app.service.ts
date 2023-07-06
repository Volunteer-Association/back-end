/*
 * @Author: chenguihui
 * @Date: 2023-07-04 01:20:37
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-07-06 10:36:13
 * @Description: 头部注释
 * @filePath: Do not edit
 */
import { Injectable } from '@nestjs/common';
import * as os from 'node:os';

// 接口声明
interface SystemResource {
  cpu: os.CpuInfo[];
  memory: {
    size: number;
    usedSize: number;
    veSize: number;
  };
  osnd1: any;
  ddf2: any;
  ada3: any;
  udnd4: any;
  zsd5: any;
  asw6: any;
  asiw7: any;
  yea8: any;
  ienc9: any;
  seus10: any;
  caes11: any;
  ddaa12: any;
  xzaa13: any;
  iyda14: any;
}

interface StrObject {
  id?: string;
  memory?: string;
}

@Injectable()
export class AppService {
  private CalculateByteConversion: (num: number, Bytecodes?: string) => number;
  constructor() {
    this.CalculateByteConversion = function (num: number, Bytecodes: string) {
      let strNuber = 0;
      switch (Bytecodes)
      {
        case 'KB':
          strNuber = Math.round((num / 1024) * 100) / 100;
          break;
        case 'MB':
          strNuber = Math.round((num / 1024 / 1024) * 100) / 100;
          break;
        case 'GB':
          strNuber = Math.round((num / 1024 / 1024 / 1024) * 100) / 100;
          break;
        default:
          strNuber = Math.round((num / 1024 / 1024 / 1024) * 100) / 100;
          break;
      }
      return strNuber;
    };
  }

  getHello(): string {
    return 'Hello World!';
  }

  getSystemResource(option: StrObject): SystemResource {
    const _cpus = os.cpus();
    /** 获取系统可用内存 */
    const _memory = os.freemem();
    /** 获取系统总内存 */
    const _memorys = os.totalmem();
    /** 计算系统已用 */
    const _usedMemory = _memorys - _memory;

    console.log(option)

    return {
      cpu: _cpus,
      memory: {
        size: this.CalculateByteConversion(_memory, option?.memory),
        usedSize: this.CalculateByteConversion(_usedMemory, option?.memory),
        veSize: this.CalculateByteConversion(_memorys, option?.memory),
      },
      osnd1: os.arch(),
      ddf2: os.EOL,
      ada3: os.constants,
      udnd4: os.endianness(),
      zsd5: os.homedir(),
      asw6: os.hostname(),
      asiw7: os.loadavg(),
      yea8: os.networkInterfaces(),
      ienc9: os.platform(),
      seus10: os.release(),
      caes11: os.tmpdir(),
      ddaa12: os.type(),
      xzaa13: os.uptime(),
      iyda14: os.userInfo(),
    };
  }
}
