import { defineConfig } from 'vite';

export default defineConfig({
  root: 'user_dash_panel', // Set the root to the correct directory
  build: {
    outDir: 'dist'
  },
  server: {
    open: true
  }
});
