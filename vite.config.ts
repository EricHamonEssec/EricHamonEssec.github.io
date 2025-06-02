import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Match your repository name
  build: {
    outDir: 'dist',
  },
});
