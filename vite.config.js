import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        copyFileSync(
          resolve(__dirname, 'dist/index.html'),
          resolve(__dirname, 'dist/404.html')
        )
      },
    },
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
