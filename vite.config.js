import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base: "/mok-portfolio/",
    // "homepage": "https://wuod-ogada.github.io/mok-portfolio/",

  server: {
    port: 3000},
})
