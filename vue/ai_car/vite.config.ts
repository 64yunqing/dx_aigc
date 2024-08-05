import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import Component from 'unplugin-vue-components/vite'
import { VantResolver } from '@vant/auto-import-resolver';

// 短链接
// path.resolve 绝对物理路径  node 环境 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Component({
      resolvers: [VantResolver()],
    }),
  ],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src')
    }
  }
})
