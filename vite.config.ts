import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg'],
  build: {
    outDir: 'dist', // Output directory matches amplify.yml
    rollupOptions: {
      input: './index.html', // Explicitly set index.html as the entry point
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})
