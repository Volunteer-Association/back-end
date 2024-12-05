import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    open: false,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('index.html', import.meta.url)),
        login: fileURLToPath(new URL('login.html', import.meta.url)),
        register: fileURLToPath(new URL('register.html', import.meta.url)),
        forget: fileURLToPath(new URL('forget.html', import.meta.url)),
        reset: fileURLToPath(new URL('reset.html', import.meta.url)),
        admin: fileURLToPath(new URL('admin.html', import.meta.url)),
        editor: fileURLToPath(new URL('editor.html', import.meta.url)),
        article: fileURLToPath(new URL('article.html', import.meta.url)),
        category: fileURLToPath(new URL('category.html', import.meta.url)),
        tag: fileURLToPath(new URL('tag.html', import.meta.url)),
        comment: fileURLToPath(new URL('comment.html', import.meta.url)),
        user: fileURLToPath(new URL('user.html', import.meta.url)),
        about: fileURLToPath(new URL('about.html', import.meta.url)),
        contact: fileURLToPath(new URL('contact.html', import.meta.url)),
        error: fileURLToPath(new URL('error.html', import.meta.url)),
      }
    }
  }
})
