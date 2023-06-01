/*
 * @Author: chenguihui
 * @Date: 2023-05-26 00:56:39
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-06-01 13:40:45
 * @Description: 服务的配置信息
 * @filePath: Do not edit
 */
// 导入os模块
const os = require("os");
// 获取IP
const IP = os.networkInterfaces();
// 调用获取IP函数
const getIP = getosIP();
/** 判断是否开发环境 */
const isEnvDevelopment = process.env.NODE_ENV == "development";

/** 配置信息 */
const Config = {
  /** 服务配置 */
  serverOptions: {
    host: `http://${getIP}`,
    hosta: `https://${getIP}`,
    hostIP: `${getIP}`,
    port: 3000,
    ports: 3001,
    baseUrl: "/static/file"
  },
  swaggerConfig: {

  },
  /** 数据库配置 */
  mysqlOptions: {
    // 数据库名字
    database: "backstage",
    // 用户名
    username: isEnvDevelopment ? "lenovo" : "back-end",
    // 登录密码
    password: isEnvDevelopment ? "chen2020." : "back-end2023.",
    // 数据库地址
    host: "localhost",
    // 数据库端口
    port: isEnvDevelopment ? 3306 : 33016,
    // 数据库类型
    dialect: "mysql",
    // 时区
    timezone: "+08:00",
    // 字段以_命名
    underscored: true,
  },
  emailOptions: {

  },
  hostOptions: {

  },
  nickNameOptions: {

  }
}
/** 获取本地IP地址 */
function getosIP(): string {
  // 判断网卡信息
  if (IP["以太网"] instanceof Array) {
    // 循环遍历网卡信息
    for (let i = 0; i < IP["以太网"].length; i++) {
      // 判断为IPv4地址
      if (IP["以太网"][i].family == "IPv4") {
        // 返回IPv4地址
        return IP["以太网"][i].address;
      }
    }
  } else if (IP["WLAN"] instanceof Array) {
    // 循环遍历网卡信息
    for (let i = 0; i < IP["WLAN"].length; i++) {
      // 判断为IPv4地址
      if (IP["WLAN"][i].family == "IPv4") {
        // 返回IPv4地址
        return IP["WLAN"][i].address;
      }
    }
  } else if (IP["ens33"] instanceof Array) {
    // 循环遍历网卡信息
    for (let i = 0; i < IP["ens33"].length; i++) {
      // 判断为IPv4地址
      if (IP["ens33"][i].family == "IPv4") {
        // 返回IPv4地址
        return IP["ens33"][i].address;
      }
    }
  } else if (IP["eth0"] instanceof Array) {
    // 循环遍历网卡信息
    for (let i = 0; i < IP["eth0"].length; i++) {
      // 判断为IPv4地址
      if (IP["eth0"][i].family == "IPv4") {
        // 返回IPv4地址
        return IP["eth0"][i].address;
      }
    }
  } else {
    // 否则返回本第回环地址
    return "127.0.0.1";
  }
}

export default Config;
