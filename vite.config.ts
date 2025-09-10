import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Dev server settings
  server: {
    // Expose to local network (mobile / other devices) -> shows under Network URL
    host: true, // equivalent to 0.0.0.0
    port: 5173,
    open: false,
    // Proxy API requests to Django backend running on 8000
    // Use fetch('/api/your-endpoint/') in frontend
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
        // Optional: remove /api prefix before forwarding
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
});
