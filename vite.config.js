import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  base: './', // Utilise des chemins relatifs pour le déploiement
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        details: resolve(__dirname, 'product-details.html'),
      }
    }
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { 
          src: 'public/static/**/*', 
          dest: 'static' 
        }
      ]
    })
  ],
  // Configuration pour le serveur de développement
  server: {
    fs: {
      allow: ['..']
    }
  }
});

