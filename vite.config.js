import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/GrowInversiones/', // ⬅️ ¡REEMPLAZÁ ACÁ con el nombre exacto de tu repositorio en GitHub!
})