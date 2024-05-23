import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Investment-Calculator-React/', // Add this line
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
});
