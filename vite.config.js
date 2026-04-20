import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    allowedHosts: [
      '8130-171-250-163-207.ngrok-free.app',
      '.ngrok-free.app'
    ]
  }
})
