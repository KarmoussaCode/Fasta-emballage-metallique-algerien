import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    assetsDir: 'static',
  },
  publicDir: 'static',
  server: {
    port: 3000,
  },
  base: '/',
}); 