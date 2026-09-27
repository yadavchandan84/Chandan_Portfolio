import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment set base to '/<repo-name>/'.
  // Leave as '/' for Vercel / Netlify.
  base: '/',
})
