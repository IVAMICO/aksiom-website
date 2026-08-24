import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // Forwards to the local aksiom-demo-api dev server (see that project's README).
      '/api': 'http://localhost:8090',
    },
  },
})
