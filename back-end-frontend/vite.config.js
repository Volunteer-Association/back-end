/*
 * @Author: chenguihui
 * @Date: 2023-06-01 11:10:12
 * @LastEditors: chenguihui
 * @LastEditTime: 2023-07-02 05:14:51
 * @Description: 
 * @filePath: Do not edit
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: process.env.NODE_ENV === "production" ? "./" : "/",
  server: {
    port: 8000,
    host: "0.0.0.0",
    proxy: {
      "/api/": {
        target: "http://localhost:3000",
        changeOrigin: true,
        configure: (proxy, options) => {
          console.log(proxy, options);
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  build: {
    outDir: "dist",
    minify: true,
    sourcemap: false,
  },
});
