import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        archive: resolve(__dirname, '/archive/index.html'),
        login: resolve(__dirname, '/login/index.html'),
        popular: resolve(__dirname, '/popular/index.html'),
        settings: resolve(__dirname, '/settings/index.html'),
        welcome: resolve(__dirname, '/welcome/index.html'),
      },
    },
    outDir: 'docs'
  },
})