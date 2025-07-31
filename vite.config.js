import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: true,
    open: true,
    watch: {
      usePolling: true,
      interval: 1000,
  }
  }
}
)
