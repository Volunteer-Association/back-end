/*
 * @Author: chenguihui
 * @Date: 2023-05-20 23:24:05
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-05-21 12:31:12
 * @Description: 路由配置模块
 * @filePath: Do not edit
 */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/auth/login/Login.vue')
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/about/About.vue')
    }
  ]
})

export default router
