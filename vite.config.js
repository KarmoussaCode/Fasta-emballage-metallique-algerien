import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        productDetails: resolve(__dirname, 'product-details.html'),
        bidonRectangulaireDetails: resolve(__dirname, 'Bidon-rectangulaire-details.html'),
        bidonConique: resolve(__dirname, 'Bidon-conique.html'), // Ajoutez cette ligne
        // Ajoutez d'autres pages de détails ici si vous en avez
      },
    },
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

