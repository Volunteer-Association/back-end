import { Controller, Get, Param, Req, Query } from '@nestjs/common';
import { AppService } from './app.service';
import * as os from 'node:os';

// 接口声明
interface SystemResource {
  cpu: os.CpuInfo[];
  memory?: {
    size: number,
    usedSize: number,
    veSize: number
  };
}

interface StrObject {
  id?: string;
  memory?: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('system')
  getSystemResource(@Query() option: StrObject): SystemResource {
    return this.appService.getSystemResource(option);
  }
}
