import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: []
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx'
      }
    }
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api/nhl': {
        target: 'https://api-web.nhle.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/nhl/, '/v1'),
        secure: false,
        followRedirects: true,
        configure: (proxy, options) => {
          proxy.on('proxyRes', (proxyRes, req, res) => {
            // Handle redirects within proxy
            if (proxyRes.headers.location) {
              proxyRes.headers.location = proxyRes.headers.location.replace(
                'https://api-web.nhle.com/v1',
                '/api/nhl'
              );
            }
          });
        }
      }
    }
  }
})
