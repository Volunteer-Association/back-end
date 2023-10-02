/*
 * @Author: chenguihui
 * @Date: 2023-07-06 11:42:20
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-07-08 05:52:12
 * @Description: 头部注释
 * @filePath: Do not edit
 */
import { Injectable } from '@nestjs/common';
import { CreateLoginDto, GiteeAuthorizedDto } from './dto/create-login.dto';
import { UtilsModule } from '@/utils/utils.module';

@Injectable()
export class LoginService {

  constructor(private readonly utilsModule: UtilsModule) {}

  create(createLoginDto: CreateLoginDto) {
    console.log(createLoginDto);
    return 'This action adds a new login';
  }

  GiteeAuthorized(Code: CreateLoginDto): GiteeAuthorizedDto {
    
    /*
    const request = axios.create({
      baseURL: 'https://gitee.com',
    });

    request.interceptors.request.use(
      (config) => {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        if (config.method === 'POST' || config.method === 'post') {
          let paramsString = '';
          for (let key in config.data) {
            paramsString += `${key}=${config.data[key]}&`;
          }
          //重新赋值config.data
          config.data = paramsString.slice(0, -1);
        }
        return config;
      },
      (error) => {
        return error;
      },
    );

    let userDate = {};
    request({
      method: 'POST',
      url: '/oauth/token',
      data: {
        grant_type: 'authorization_code',
        code: Code.code,
        client_id:
          '6ed4ae5d52c8d4b23c9d4019ee8f706d8b5c41ed2594fdd811c2206f74996297',
        redirect_uri: 'http://192.168.1.6:3000/auth/gitee',
        client_secret:
          'bf956e0eca3b944f97df64188bef05a02e3cea40687a72c7be7574b8a13db3dd',
      },
    }).then(result => {
      userDate = result.data;
      return request({
        method: "GET",
        url: `/api/v5/user?access_token=${result.data.access_token}`
      })
    }).then(result => {
      console.log(result);
    })*/

    return {

    };
  }
}
