import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    assetsDir: 'assets',
    outDir: 'dist',
  },
  publicDir: 'static',
  server: {
    port: 3000,
  },
  base: './',
}); 