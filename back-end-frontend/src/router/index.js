/*
 * @Author: chenguihui
 * @Date: 2023-05-20 23:24:05
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-21 15:44:23
 * @Description: 路由配置模块
 * @filePath: Do not edit
 */
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
