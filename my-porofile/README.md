# Portfolio — Développeur Full Stack

Portfolio React + Vite + TypeScript, multilingue (FR / EN / ES / AR / TAM) avec thème clair/sombre.

## Démarrage local

```bash
npm install
npm run dev      # serveur de dev
npm run build    # compilation de production (dossier dist/)
npm run preview  # prévisualiser le build localement
```

## Déploiement

### Vercel (recommandé pour un site rapide + HTTPS)

1. Poussez le projet sur GitHub, puis importez le repo dans [vercel.com](https://vercel.com).
2. Vercel détecte automatiquement **Vite** :
   - Build command : `npm run build`
   - Output directory : `dist`
3. Refer to `vercel.json` (déjà présent) pour le fallback SPA.
4. Le site est en ligne à `https://<projet>.vercel.app`.

Ligne de commande alternative :

```bash
npm i -g vercel
vercel            # déployer en preview
vercel --prod     # déployer en production
```

### GitHub Pages

Déjà configuré dans le projet (`base: './'`, `404.html`, script `deploy`).

1. Créez sur GitHub un repo (ex. `react-front-end`).
2. Changez `homepage` dans `package.json` :
   ```json
   "homepage": "https://<USERNAME>.github.io/<REPO>/"
   ```
3. Déployez :

```bash
npm run deploy
```

4. Dans le repo GitHub : **Settings → Pages → Source: `gh-pages`** (branch) puis Save.
5. Site disponible sur `https://<USERNAME>.github.io/<REPO>/`.

> La première commande `npm run deploy` vous demandera d'authentifier GitHub (gh-pages).

## Structure

```
src/
  components/     # sections du portfolio (Hero, About, Skills, ...)
  context/        # ThemeContext, LanguageContext
  data/           # données par catégorie (projects, experience, formation, certifications, specialites)
  i18n/           # dictionnaires de traduction (fr, en, es, ar, tam)
  pages/          # Portfolio, NotFound
  router.tsx      # routes react-router
index.html        # SEO + polices
vercel.json       # fallback SPA Vercel
public/404.html   # fallback SPA GitHub Pages
```