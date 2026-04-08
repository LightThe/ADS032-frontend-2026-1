import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tcss()],
  // Configuração do Servidor para Docker  
  server: {
    host: "0.0.0.0",
    port: 5173,
    watch: {
      usePolling: true,
    },
    hmr: {
      clientPort: 5173,
    },
  },
})
