import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':resolve(__dirname,'./src'),
      '*':resolve(__dirname,''),
      "/images":"./src/assets"
    },
    // 打包以后的js,css和img资源分别分门别类在js/css/img文件夹中
    output:{
      chunkFileNames:'static/js/[name]-[hash].js',
      entryFileNames:"static/js/[name]-[hash].js",
      assetFileNames:"static/[ext]/name-[hash].[ext]"
    },
    /* server:{
      hmr:true, //开启热更新
      port:8080, //vite项目启动时自定义端口
      open:true, //vite项目启动时自动打开浏览器
    }, */
  }
})
