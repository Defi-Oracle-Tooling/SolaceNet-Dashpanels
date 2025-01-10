import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: 'public', // Set the root to the correct directory
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['/src/index.js']
    }
  }
});