/*
 * @Author: chenguihui
 * @Date: 2023-05-21 16:04:18
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-21 17:31:55
 * @Description: 路由路径
 * @filePath: Do not edit
 */
import HomeView from "@/views/home/Home.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/auth/login/Login.vue"),
    children: [
      {
        path: "/register",
        name: "register",
        component: () => import("@/views/auth/register/Register.vue")
      }
    ]
  },
  {
    path: "/",
    name: "name",
    component: HomeView,
  },
  {
    path: "/upload",
    name: "upload",
    component: () => import("@/views/uploadFile/UploadFile.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/about/About.vue"),
  },
];

export default routes;
