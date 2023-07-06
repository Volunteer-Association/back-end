/*
 * @Author: chenguihui
 * @Date: 2023-05-21 18:25:04
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-21 19:06:22
 * @Description: 登录相关的请求接口
 * @filePath: Do not edit
 */

import request from "@/api/request"

export const login = (data) => {
  return request({
    method: "POST",
    url: "/api/auth/login",
    data
  })
}

export const getSystem = (data) => {
  return request({
    method: "GET",
    url: "/system",
    data
  })
}
