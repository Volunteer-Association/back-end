/*
 * @Author: chenguihui
 * @Date: 2023-05-26 01:28:38
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-26 02:08:11
 * @Description: 数据库链接
 * @filePath: Do not edit
 */
import { TypeOrmModule } from '@nestjs/typeorm';
import Config from '../config/config';
/** 数据库链接 */
const Connect = TypeOrmModule.forRoot({
  type: Config.mysqlOptions.dialect as 'aurora-mysql',
  host: Config.mysqlOptions.host,
  port: Config.mysqlOptions.port,
  username: Config.mysqlOptions.username,
  password: Config.mysqlOptions.password,
  database: Config.mysqlOptions.database,
  entities: [],
  synchronize: Config.mysqlOptions.underscored,
  retryDelay: 500,
  retryAttempts: 10
});

export default Connect;
