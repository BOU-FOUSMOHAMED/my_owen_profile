# Portfolio — Développeur Full Stack

Portfolio React + Vite + TypeScript, multilingue (FR / EN / ES / AR / TAM) avec thème clair/sombre.

## Démarrage local

```bash
npm install
npm run dev       # serveur de dev
npm run seo       # regénère robots.txt + sitemap.xml (à lancer après tout ajout d'article)
npm run test:seo  # vérifie URLs, hreflang, données structurées et fichiers statiques
npm run build     # compilation de production (dossier dist/)
npm run preview   # prévisualiser le build localement
```

## SEO

Le site est en **React + Vite + TypeScript**, multilingue (FR / EN / ES / AR / TAM),
avec thème clair/sombre.

### Changer de domaine

Une seule ligne à modifier :

```
src/lib/seo.ts  ->  export const SITE_URL = "https://boufousmohamed.vercel.app";
```

`npm run build` propage automatiquement cette valeur vers `index.html`
(canonical, `hreflang`, Open Graph, JSON-LD), `public/robots.txt` et
`public/sitemap.xml`. Les fichiers ne peuvent plus diverger.

### Architecture des URLs

Le langage fait partie de l'URL, ce qui rend chaque traduction indexable et
permet les annotations `hreflang` :

```
/fr                      page d'accueil
/fr/blog                 liste des articles
/fr/blog/rest-api-secure article
```

Les anciennes URL `#/blog/...` et `/blog/...` sont redirigées vers `/fr/...`.
Pour une SPA, Google ne voit que les URL sans fragment : c'est ce qui permet
à chaque article d'être référencé séparément.

### Ce qui est généré automatiquement

`npm run seo` ( exécuté automatiquement par `npm run build`) :

- **`public/robots.txt`** — directives pour Googlebot, autorisation explicite
  des crawlers IA (GPTBot, Google-Extended, PerplexityBot, ClaudeBot) et
  blocage des crawlers SEO sans intérêt (Ahrefs, Semrush, DotBot, MJ12).
- **`public/sitemap.xml`** — 40 URL (6 articles × 5 langues + pages principales),
  chacune avec son cluster `hreflang` complet et un `lastmod` réel.
- **`index.html`** — réécrit si le domaine ne correspond plus à `SITE_URL`.

### Balises head par page

`src/lib/useSeo.ts` applique à la volée, sur chaque route : `title`,
`description`, `canonical`, `robots`, `hreflang`, Open Graph, Twitter Card et
JSON-LD. Les données structurées couvrent `Person`, `WebSite`, `Blog` et
`BlogPosting` (avec `datePublished`).

Les pages 404 sont servies en `noindex, follow` pour ne pas diluer le sitemap.

### Performance (Core Web Vitals)

Le schéma d'architecture des projets (~50 ko, 5 langues) et les modales sont
chargés à la demande : ils ne bloquent pas le premier rendu. Le bundle initial
est passé de 613 ko à 558 ko.

### Après chaque déploiement

1. Google Search Console → **Inspection d'URL** sur `/fr` → *Demander l'indexation*.
2. **Pages indexées** → envoyer le nouveau `sitemap.xml`.
3. Le partage sur LinkedIn / WhatsApp utilise `public/og-image.png`
   (1200×630). Le cache des réseaux sociaux peut mettre quelques heures à
   se rafraîchir : https://www.linkedin.com/post-inspector/

## Déploiement

### Vercel (recommandé pour un site rapide + HTTPS)

1. Poussez le projet sur GitHub, puis importez le repo dans [vercel.com](https://vercel.com).
2. Vercel détecte automatiquement **Vite** :
   - Build command : `npm run build`
   - Output directory : `dist`
3. Refer to `vercel.json` (déjà présent) pour le fallback SPA.
4. Le site est en ligne à `https://boufousmohamed.vercel.app`.
5. **Important** : `vercel.json` redirige toutes les routes vers `index.html`
   (fallback SPA). Sans cela, `/fr/blog/...` renvoie un 404.

Ligne de commande alternative :

```bash
npm i -g vercel
vercel            # déployer en preview
vercel --prod     # déployer en production
```

### GitHub Pages (optionnel)

Moins bon que Vercel pour le SEO : GitHub Pages ne supporte pas les rewrites,
le fallback passe par `public/404.html`.

1. Dans `vite.config.ts`, remplacer `base: '/'` par `base: '/<REPO>/'`
   (une base relative casserait les favicons sur les URL profondes).
2. Dans `src/lib/seo.ts`, ajouter le préfixe à `SITE_URL` :
   `"https://<USERNAME>.github.io/<REPO>"`.
3. Déployer :

```bash
npm run deploy
```

4. Dans le repo GitHub : **Settings → Pages → Source: `gh-pages`** (branch) puis Save.

> La première commande `npm run deploy` vous demandera d'authentifier GitHub (gh-pages).

## Structure

```
src/
  components/     # sections du portfolio (Hero, About, Skills, ...)
  context/        # ThemeContext, LanguageContext (langue déduite de l'URL)
  data/           # données par catégorie (projects, experience, blog, ...)
  i18n/           # dictionnaires de traduction (fr, en, es, ar, tam)
  lib/
    seo.ts        # SITE_URL, URLs canoniques, hreflang, données structurées
    useSeo.ts     # application des balises head par route
    section.ts    # navigation par ancre, sensible à la langue
  pages/          # Portfolio, Blog, BlogPost, NotFound
  router.tsx      # routes react-router (URLs /:lang/...)
scripts/
  generate-seo.mjs # génère robots.txt + sitemap.xml, synchronise index.html
  test-seo.mjs     # tests des URLs, hreflang, JSON-LD et fichiers statiques
index.html        # SEO statique + fallback <noscript>
vercel.json       # rewrites SPA + cache et en-têtes de sécurité
public/
  robots.txt      # généré
  sitemap.xml     # généré
  og-image.png    # aperçu réseaux sociaux 1200x630
  404.html        # fallback SPA GitHub Pages
```