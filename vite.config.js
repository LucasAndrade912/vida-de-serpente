import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'bio-diversidade': resolve(__dirname, 'bio-diversidade.html'),
        'desequilibrio': resolve(__dirname, 'desequilibrio.html'),
        'contato': resolve(__dirname, 'contato.html')
      },
    },
  },
})
