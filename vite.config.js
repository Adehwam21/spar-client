import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      buffer: 'buffer',
      process: 'process/browser',
    },
  },
  define: {
    global: 'globalThis', // Add `global` definition to mimic Node.js
    'process.env': {}, // Prevent process.env-related errors
  },
  server: {
    host: '0.0.0.0', // Accept connections from any IP
    port: 5173,
  },
});
