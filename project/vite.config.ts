import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer'

import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/scss/main.scss";`
      }
    },
    postcss: {
      plugins: [
        autoprefixer({
          browsers: ['defaults', 'last 2 versions', 'Edge >= 12', 'Firefox >= 20'],

          overrideBrowserslist: ['defaults', 'last 2 versions', 'Edge >= 12', 'Firefox >= 20'],
          grid: 'stable',
          flexbox: 'modern',
          cascade: false
        })
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
