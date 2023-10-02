import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

type Cat = {};

@Injectable()
export class UtilsService {
  constructor(private readonly httpService: HttpService) {}

  findAll(code: string): Observable<AxiosResponse<Cat[]>> {
    const result = this.httpService.axiosRef({
      method: 'post',
      url: 'https://gitee.com/oauth/token',
      data: {
        grant_type: 'authorization_code',
        code: code,
        client_id:
          '6ed4ae5d52c8d4b23c9d4019ee8f706d8b5c41ed2594fdd811c2206f74996297',
        redirect_uri: 'http://192.168.1.6:3000/auth/gitee',
        client_secret:
          'bf956e0eca3b944f97df64188bef05a02e3cea40687a72c7be7574b8a13db3dd',
      },
    });

    console.log(result);

    return this.httpService.get('http://loclhost:3000');
  }
}
