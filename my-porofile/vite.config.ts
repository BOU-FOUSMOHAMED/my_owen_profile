import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Absolute base: the site is served from the domain root on Vercel.
 *
 * A relative base (`./`) makes Vite rewrite public asset references in
 * index.html to relative paths, which break on deep URLs — on
 * /fr/blog/post, `./favicon.svg` resolves to /fr/blog/favicon.svg (404).
 *
 * To deploy on GitHub Pages project sites instead, set:
 *   base: '/<repo-name>/'
 * and update SITE_URL in src/lib/seo.ts to include that prefix.
 */
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})