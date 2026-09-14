import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// `base: './'` => relative asset paths:
// works on GitHub Pages (project site sub-path) and Vercel (root).
export default defineConfig({
  base: './',
  plugins: [react()],
})