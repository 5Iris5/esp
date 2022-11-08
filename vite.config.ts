import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

let a
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3002, // 设置服务启动端口
    open: true // 服务启动时自动打开浏览器
  }
})
