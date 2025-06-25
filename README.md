# FASTA Emballage - Site Vitrine

## Description
Site vitrine pour l'entreprise FASTA Emballage, spécialisée dans les solutions d'emballage métallique en Algérie.

## Structure du projet
- `index.html` - Page d'accueil
- `products.html` - Page catalogue des produits
- `product-details.html` - Page de détails d'un produit
- `src/` - Fichiers JavaScript sources
- `public/static/` - Assets statiques (CSS, images, JS)
- `dist/` - Répertoire de build (généré)

## Installation et développement

### Prérequis
- Node.js (version 18 ou supérieure)
- npm

### Installation des dépendances
```bash
npm install
```

### Développement local
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:5173`

### Build de production
```bash
npm run build
```
Les fichiers de production seront générés dans le répertoire `dist/`

### Prévisualisation du build
```bash
npm run preview
```

## Déploiement sur Netlify

### Option 1 : Déploiement automatique via Git
1. Connecter le repository à Netlify
2. Configurer les paramètres de build :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
3. Le déploiement se fera automatiquement à chaque push

### Option 2 : Déploiement manuel
1. Exécuter `npm run build`
2. Glisser-déposer le contenu du répertoire `dist/` sur Netlify

## Configuration Netlify
Le fichier `netlify.toml` contient la configuration pour :
- Les redirections des pages HTML
- La gestion des erreurs 404
- Les headers de cache pour les assets

## Fonctionnalités
- ✅ Page d'accueil avec présentation de l'entreprise
- ✅ Catalogue de produits avec images et spécifications
- ✅ Page de détails pour chaque produit
- ✅ Formulaire de contact avec EmailJS
- ✅ Design responsive
- ✅ Navigation fluide entre les pages

## Technologies utilisées
- Vite (build tool)
- HTML5/CSS3/JavaScript ES6
- EmailJS (pour le formulaire de contact)
- Font Awesome (icônes)

## Support
Pour toute question ou problème, contactez l'équipe de développement.

