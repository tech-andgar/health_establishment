import { defineConfig } from 'vite'

export default defineConfig({
  base: '/health_establishment/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
  server: {
    port: 5173,
    open: true
  }
}) 
