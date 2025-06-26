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
import * as https from 'node:https';
import { Parameter, SystemResource } from './create-app.dto';

@Injectable()
export class AppService {
  updateUserAudio(value: string): string {
    throw new Error('Method not implemented.');
  }
  /**
   * CalculateByteConversion 字节转换函数
   * @param num 要转换的字节数
   * @param Bytecodes 转换的单位 KB MB GB
   * @returns 转换后的数值
   */
  private CalculateByteConversion: (num: number, Bytecodes?: string) => number;
  /**
   * UploadFile 文件上传函数
   * @param file 上传的文件路径
   * @param data 上传的文件内容
   * @returns 上传成功的文件路径
   */
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
        kb: 1024,
        mb: 1024 * 1024,
        gb: 1024 * 1024 * 1024,
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

      // console.log(data);
      return '文件夹创建成功';
    };
    this.num = 0;
  }

  getHello(): string {
    const _txt = this.UploadFile('./upload', [1]);

    function getCpuGithhub() {
      try {
        const req = https.request(
          {
            hostname: 'www.baidu.com',
            path: '/',
            method: 'GET',
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
            },
          },
          (res) => {
            let data = '';
            res.on('data', (chunk) => {
              data += chunk;
            });
            res.on('end', () => {
              fs.writeFile('github.html', data, (err) => {  
                if (err) {  
                  console.log('写入失败', err);  
                } else {  
                  console.log('写入成功');  
                }  
              });
            });
          },
        );
        req.on('error', (err) => {
          console.log('Error: ' + err);
          console.log('Error: ' + err.message);
        });
        req.end();
      } catch (error) {
        if (error.code === 'ECONNRESET') {
          console.log('连接被重置');
          getCpuGithhub();
          // 重试连接
        } else if (error.code === 'ECONNREFUSED') {
          console.log('连接被拒绝');
          getCpuGithhub();
          // 重试连接
        } else if (error.code === 'ETIMEDOUT') {
          console.log('连接超时');
          getCpuGithhub();
          // 重试连接
        } else if (error.code === 'ENOTFOUND') {
          console.log('域名解析失败');
          getCpuGithhub();
          // 重试连接
        } else {
          console.log('其他错误', error);
        }
      }
    }

    // getCpuGithhub();

    const _getUser = https
      .get('https://www.github.com', (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          console.log(data);
        });
      })
      .on('error', (err) => {
        console.log('Error: ' + err);
        console.log('Error: ' + err.message);
      });

    console.log(_txt);
    return 'Hello World!';
  }
  /**
   * 获取系统资源信息
   * @param option 参数
   * @param option.id 资源id
   * @param option.memory 内存单位 KB MB GB
   * @returns 
   */
  getSystemResource(option: Parameter): any {
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

      getDiskUsage(path: string) {
        return new Promise((resolve, reject) => {
          fs.statfs(path, (err, stats) => {
            if (err) {
              reject(err);
            } else {
              const totalSize = stats.blocks * stats.bsize;
              const freeSize = stats.bfree * stats.bsize;
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
        /**
         * 处理回调函数
         * @param value 回调值
         * @param callback 回调函数
         * @returns void
         */
        function registerCallback(callback: (value: string | number) => void) {
          // 注册回调函数
          if (typeof callback === 'function') {
            callback("监控开始");
            callback(2223);
          } else {
            console.error('回调函数必须是一个函数');
          }
        }

        /**
         * 注册回调函数
         * @param callback 回调函数
         * @returns void
         */
        // 注册回调函数
        registerCallback((value) => {
          console.log(value);
        });

        // 启动监控
        // 定时器
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
              console.log(
                `磁盘使用率：${(disk as { usage: number }).usage.toFixed(2)}%`,
              );
            })
            .catch((err) => {
              console.error('获取磁盘信息失败:', err);
            });
        }, 1000);
      }
    }

    // const monitor = new ResourceMonitor();
    // monitor.startMonitoring();

    // new ResourceMonitor();

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

    return {
      cpu: _cpus,
      memory: {
        size: this.CalculateByteConversion(_memory, option?.memory),
        usedSize: this.CalculateByteConversion(_usedMemory, option?.memory),
        veSize: this.CalculateByteConversion(_memorys, option?.memory),
      },
      arch: os.arch(),
      EOL: os.EOL,
      constants: os.constants,
      endianness: os.endianness(),
      homedir: os.homedir(),
      hostname: os.hostname(),
      loadavg: os.loadavg(),
      networkInterfaces: os.networkInterfaces(),
      platform: os.platform(),
      release: os.release(),
      tmpdir: os.tmpdir(),
      type: os.type(),
      uptime: os.uptime(),
      userInfo: os.userInfo(),
      ...os,
      // sdas15: os.availableParallelism(),
      // udaa16: os.machine(),
      // sdfa17: os.getPriority(4504),
    };
  }

  uploadFile(files: Array<Express.Multer.File>): string {
    // console.log(files);

    // 获取文件名和文件类型
    // const { originalname, mimetype } = files.map((file) => {return file.originalname, file.mimetype});



    // files
    //   ? files?.forEach((ele) => {
    //       this.num++;
    //       // let oldfFile = `./upload/${this.num}.vcd`;
    //       let oldfFile = `./upload/${ele.originalname}`;
    //       try {
    //         fs.mkdirSync('./upload');
    //       } catch (err) {}
    //       fs.writeFile(oldfFile, ele.buffer, (err) => {
    //         if (err) {
    //           return '文件上传失败';
    //         }
    //       });
    //       // this.getUserAudio(oldfFile);
    //       fs.readFile(oldfFile, (err, data) => {
    //         if (err) {
    //           console.log(err);
    //         } else {
    //           console.log(' 文件数据', data);
    //         }
    //       });
    //     })
    //   : '错误';

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
