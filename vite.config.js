import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '295d-223-181-32-247.ngrok-free.app'  // your ngrok URL
    ],
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      }
    }
  }
})