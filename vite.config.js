import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: 3500,
    proxy: {
      '/api': 'http://localhost:4100' // same port as server
    }
  }
})

