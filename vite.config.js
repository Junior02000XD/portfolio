import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Variante B: sin three.js, no hace falta separar un chunk 3D.
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
