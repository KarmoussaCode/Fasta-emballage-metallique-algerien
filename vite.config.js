import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    assetsDir: 'images',
    outDir: 'dist',
  },
  publicDir: 'static',
  server: {
    port: 3000,
  },
  base: process.env.NODE_ENV === 'production' ? '/' : './',
}); 