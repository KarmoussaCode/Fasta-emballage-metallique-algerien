import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'products.html',
          dest: ''
        },
        {
          src: 'product-details.html',
          dest: ''
        }
      ]
    })
  ],
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
