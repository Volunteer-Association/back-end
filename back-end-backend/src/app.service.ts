/*
 * @Author: chenguihui
 * @Date: 2023-07-04 01:20:37
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-07-10 15:36:28
 * @Description: 头部注释
 * @filePath: Do not edit
 */
import { Injectable } from '@nestjs/common';
import * as os from 'node:os';
import * as fs from 'node:fs';
import { Parameter, SystemResource } from './create-app.dto';

@Injectable()
export class AppService {
  /**
   * CalculateByteConversion 字节转换函数
   * @param num 要转换的字节数
   * @param Bytecodes 转换的单位 KB MB GB
   * @returns 转换后的数值
   */
  private CalculateByteConversion: (num: number, Bytecodes?: string) => number;
  private UploadFile: (file: string, data: Array<number>) => string;
  num: number;
  constructor() {
    /**
     * CalculateByteConversion 字节转换函数
     * @param num 要转换的字节数
     * @param Bytecodes 转换的单位 KB MB GB
     * @returns 转换后的数值
     */
    this.CalculateByteConversion = function (
      num: number,
      Bytecodes: string = 'MB',
    ) {
      const byteMap = {
        KB: 1024,
        MB: 1024 * 1024,
        GB: 1024 * 1024 * 1024,
      };

      const byte = byteMap[Bytecodes];

      if (!byte) {
        throw new Error(`wrong Bytecodes(未知的字节码): ${Bytecodes}`);
      }
      if (num < 0) {
        throw new Error(`wrong num(字节数不能为负数): ${num}`);
      }

      return Math.round((num / byte) * 100) / 100;
    };

    this.UploadFile = function (utl: string, data: Array<number>) {
      if (!fs.existsSync(utl)) {
        try {
          fs.mkdirSync(utl);
          console.log('文件夹创建成功');
        } catch (err) {
          console.log('文件夹创建失败', err);
        }
      }

      console.log(data);
      return '文件夹创建成功';
    };
    this.num = 0;
  }

  getHello(): string {
    this.UploadFile('./upload', [1]);
    return 'Hello World!';
  }

  getSystemResource(option: Parameter): SystemResource {
    // 资源监视系统
    class ResourceMonitor {
      cpuMeasure: any;
      constructor() {
        this.cpuMeasure = null;
      }

      getCpuUsage() {
        const cpus = os.cpus();
        let totalIdle = 0,
          totalTick = 0;

        cpus.forEach((cpu) => {
          for (let type in cpu.times) {
            totalTick += cpu.times[type];
          }
          totalIdle += cpu.times.idle;
        });

        return {
          idle: totalIdle / cpus.length,
          total: totalTick / cpus.length,
        };
      }

      calculateCpuUsage(startMeasure, endMeasure) {
        const idleDifference = endMeasure.idle - startMeasure.idle;
        const totalDifference = endMeasure.total - startMeasure.total;
        const percentageCPU =
          100 - ~~((100 * idleDifference) / totalDifference);
        return percentageCPU;
      }

      getMemoryUsage() {
        const freeMem = os.freemem();
        const totalMem = os.totalmem();
        const usedMem = totalMem - freeMem;
        const memoryUsage = (usedMem / totalMem) * 100;

        return {
          free: freeMem,
          total: totalMem,
          used: usedMem,
          usage: memoryUsage,
        };
      }

      getDiskUsage(path) {
        return new Promise((resolve, reject) => {
          fs.statfs(path, (err, stats) => {
            if (err) {
              reject(err);
            } else {
              const totalSize = stats.blocks * stats.bsize;
              const freeSize = stats.bfree * stats.bsize;;
              const usedSize = totalSize - freeSize;
              const diskUsage = (usedSize / totalSize) * 100;

              resolve({
                total: totalSize,
                free: freeSize,
                used: usedSize,
                usage: diskUsage,
              });
            }
          });
        });
      }

      startMonitoring() {
        setInterval(() => {
          const startMeasure = this.getCpuUsage();
          setTimeout(() => {
            const endMeasure = this.getCpuUsage();
            const cpuUsage = this.calculateCpuUsage(startMeasure, endMeasure);
            console.log(`CPU使用率：${cpuUsage}%`);
          }, 1000);

          const memory = this.getMemoryUsage();
          console.log(`内存使用率：${memory.usage.toFixed(2)}%`);

          const diskPath = os.platform() === 'win32' ? 'C:' : '/';
          this.getDiskUsage(diskPath)
            .then((disk) => {
              console.log(`磁盘使用率：${(disk as {usage: number}).usage.toFixed(2)}%`);
            })
            .catch((err) => {
              console.error('获取磁盘信息失败:', err);
            });
        }, 1000);
      }
    }

    const monitor = new ResourceMonitor();
    monitor.startMonitoring();

    new ResourceMonitor();

    const _cpus = os.cpus();
    /** 获取系统可用内存 */
    const _memory = os.freemem();
    /** 获取系统总内存 */
    const _memorys = os.totalmem();
    /** 计算系统已用 */
    const _usedMemory = _memorys - _memory;

    function getCpuUsage() {
      const cpuInfo = os.cpus(); // 获取系统中所有 CPU 的信息
      let totalIdle = 0;
      let totalTick = 0;

      for (let i = 0, len = cpuInfo.length; i < len; i++) {
        const cpu = cpuInfo[i];
        for (let type in cpu.times) {
          totalTick += cpu.times[type]; // 计算 CPU 的总时钟周期数
        }
        totalIdle += cpu.times.idle; // 计算 CPU 的空闲时钟周期数
      }

      return {
        idle: totalIdle / cpuInfo.length,
        total: totalTick / cpuInfo.length,
      };
    }
    /*
    // 每秒获取一次 CPU 使用率
    setInterval(() => {
      const startMeasure = getCpuUsage(); // 获取起始时的 CPU 使用率

      setTimeout(() => {
        const endMeasure = getCpuUsage(); // 获取结束时的 CPU 使用率
        const idleDifference = endMeasure.idle - startMeasure.idle; // 空闲周期数差值
        const totalDifference = endMeasure.total - startMeasure.total; // 总周期数差值
        const percentageCPU =
          100 - ~~((100 * idleDifference) / totalDifference); // CPU 使用率百分比

        console.log(endMeasure)

        console.log(idleDifference, totalDifference);
        console.log(`CPU使用率：${percentageCPU}%`); // 打印 CPU 使用率
      }, 1000); // 设置1秒的延迟
    }, 1000); // 每秒执行一次*/

    console.log(option);

    // const disks = os.platform() === 'win32' ? ['C:'] : ['/'];
    // disks.forEach((disk) => {
    //   fs.stat(disk, (err, status: any) => {
    //     if (err) {
    //       console.error(`Failed to get disk information for ${disk}: ${err}`);
    //       // console.log(disk)
    //     } else {
    //       const totalSize = status.size;
    //       const freeSize = status?.available;
    //       console.log(`Disk: ${disk}`);
    //       console.log(`Total Size: ${totalSize} bytes`);
    //       console.log(`Free Size: ${freeSize} bytes`);
    //     }
    //   });
    // });
    /*
    const cmdOrder = {
      getAllDrive: () => 'logicdisk',
      getOnerDriveName: (drive: string) => `wmic${drive}`,
    };

    async function getAllDrive(): Promise<string[]> {
      let result: string[] = [];
      let promise = new Promise((resolve, reject) => {
        process.exec(cmdOrder.getAllDrive(), (err, stdour) => {
          if (err !== null) {
            console.log(err);
            return;
          }
          let stdoutArr = [...stdour];
          stdoutArr.forEach((v: string, i: number) => {
            if (v === ':') {
            }
          });
        });
      });
      return result;
    }*/

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
      ...os,
      // sdas15: os.availableParallelism(),
      // udaa16: os.machine(),
      // sdfa17: os.getPriority(4504),
    };
  }

  uploadFile(files: Array<Express.Multer.File>): string {
    console.log(files);
    files
      ? files?.forEach((ele) => {
          this.num++;
          // let oldfFile = `./upload/${this.num}.vcd`;
          let oldfFile = `./upload/${ele.originalname}`;
          try {
            fs.mkdirSync('./upload');
          } catch (err) {}
          fs.writeFile(oldfFile, ele.buffer, (err) => {
            if (err) {
              return '文件上传失败';
            }
          });
          // this.getUserAudio(oldfFile);
          fs.readFile(oldfFile, (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log(' 文件数据', data);
            }
          });
        })
      : '错误';

    return '文件上传成功';
  }

  getUserAudio(value: string): string {
    let names = fs.statSync('./public/ycccc.kgma');

    const ReadStream = fs.createReadStream('./public/ycccc.kgma');
    const WriteStream = fs.createWriteStream('./public/ycccc.mp3');

    ReadStream.pipe(WriteStream);

    // fs.readFile("./public/ycccc.kgma", (err, data) => {
    //   if (err) {
    //     console.log("错误", err)
    //   } else {
    //     // console.log("成功", data)
    //   }

    //   let fileUrl = Buffer.from(data);
    //   console.log(names, fileUrl)

    //   fs.watchFile("./public/ycccc.mp3", data, (err) => {
    //   })

    // })
    return '文件上传成功';
  }
}
