import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: `/SoccerGame/`,
  plugins: [react()],
  build:{
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.ico', '**/*.glb']
  }
  
})
