import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import unocss from 'unocss/vite'

export default defineConfig({
  plugins: [solidPlugin(), unocss()],
  server: {
    port: 3000
  },
  build: {
    target: 'esnext'
  }
})
