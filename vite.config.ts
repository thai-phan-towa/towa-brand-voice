import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import { plugins } from '@storyblok/field-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin(), ...plugins],
  build: {
    rollupOptions: {
      output: {
        format: 'commonjs',
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  server: {
    port: 8080,
    host: true,
    // proxy: {
    //   '/api': {
    //     // TODO: This is a temporary solution. Remove this after the API supports HTTPs
    //     target: 'http://159.89.213.205',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, '')
    //   }
    // }
  },
})
