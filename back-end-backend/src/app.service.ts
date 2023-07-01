import { Injectable } from "@nestjs/common";
import * as os from 'node:os';

// 接口声明
interface SystemResource {
  cpu: string;
  memory: number;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World';
  }

  getSystemResource(): string {
    // cpu
    const _cpus = os.cpus();
    // 内存
    const _memory = os.freemem();
    const _memorys = os.totalmem();
    // 网络
    // 磁盘
    return JSON.stringify({
      cpu: _cpus,
      memory: {
        size: Math.round((_memory / 1024 / 1024 / 1024) * 100) / 100,
        usedSize: Math.round(((_memorys - _memory) / 1024 / 1024 / 1024) * 100 ) / 100,
        veSize: Math.round((_memorys / 1024 / 1024 / 1024) * 100) / 100
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
      iyda14: os.userInfo()
    });
  }
}
