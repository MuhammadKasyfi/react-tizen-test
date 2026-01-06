import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Tizen Web apps are packaged and loaded from an app-local root (not a normal
  // web server). Relative paths avoid broken references like /assets/* inside a .wgt.
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    // Keep output compatible with older embedded Chromium variants.
    target: 'es2015',
  },
})
