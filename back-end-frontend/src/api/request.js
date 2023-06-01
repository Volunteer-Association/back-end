/*
 * @Author: chenguihui
 * @Date: 2023-05-21 11:40:10
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-26 02:10:24
 * @Description: 请求依赖库
 * @filePath: Do not edit
 */

import baseURL from "./BASE_URL";
import axios from "axios";
import router from '@/router/'

/** toke过期重新获取 */
const refreshTokenReq = axios.create({
  baseURL,
})

/** 基础请求 */
const request = axios.create({
  baseURL
});

// 请求拦截器
request.interceptors.request.use((config) => {
  // const { user } = store
  config.headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  }
  return config;
});

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // // 请求响应识别
    // const status = error.response.status;
    // if (status === 400) {
    //   // 客户端请求参数异常
    //   Toast.fail("客户端请求参数异常");
    // } else if (status === 401) {
    //   // token无效
    //   const { user } = store.state;
    //   if (!user || !user.token) {
    //     // 直接跳转到登录页
    //     return redirectLogin();
    //   }
    //   // 使用refresh_token请求更新
    //   try {
    //     const { data } = await refreshTokenReq({
    //       method: "PUT",
    //       url: "/app/v1_0/authorizations",
    //       headers: {
    //         Authorization: `Bearer ${user.refresh_token}`,
    //       },
    //     });
    //     // 拿到新的token后放到容器中
    //     user.token = data.data.token;
    //     store.commit("setUser", user);
    //     // 失败请求重新发送
    //     // error.config 请求相关配置信息对象
    //     return request(error.config);
    //   } catch (err) {
    //     // 刷新 token 失败
    //     redirectLogin();
    //   }
    // } else if (status === 403) {
    //   // 没有权限操作
    //   Toast.fail("没有权限操作");
    // } else if (status >= 500) {
    //   //
    //   Toast.fail("服务端异常，请稍后重式");
    // }
    // 抛出异常
    return Promise.reject(error);
  }
);

function redirectLogin () {
  router.replace({
    name: 'login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

export default request;
