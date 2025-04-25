import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
    outDir: 'dist',
  },
  publicDir: 'public',
  server: {
    port: 3000,
  },
  base: '/',
}); 