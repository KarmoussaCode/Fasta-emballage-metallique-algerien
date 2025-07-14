import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { resolve } from 'path';

export default defineConfig({
  base: './', // Utilise des chemins relatifs pour le déploiement
  build: {
    assetsDir: 'assets', // <-- AJOUTEZ CETTE LIGNE
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products.html'),
        productDetails: resolve(__dirname, 'product-details.html'),
        bidonRectangulaireDetails: resolve(__dirname, 'Bidon-rectangulaire-details.html'),
        bidonConique: resolve(__dirname, 'Bidon-conique.html'), 
        boitecylindrique: resolve(__dirname, 'boite-cylendrique.html'),
        duliantDetails: resolve(__dirname, 'duliant.html'),
        canette: resolve(__dirname, 'canette.html'),
        // Ajoutez cette ligne
        // Ajoutez d'autres pages de détails ici si vous en avez
      },
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
  },
  plugins: [
    viteStaticCopy({
      targets: [
        { 
          src: 'public/static/**/*', 
          dest: 'assets' 
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
