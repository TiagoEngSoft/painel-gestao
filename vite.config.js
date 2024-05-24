import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Ajuste o limite de aviso de tamanho de pedaço conforme necessário
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Agrupa todas as dependências de terceiros em um único pedaço (chunk)
            return 'vendor';
          }
        },
      },
    },
  },
})
