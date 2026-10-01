import path from 'path';
import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// devashishjaiswal.com — deployed at the domain root.
export default defineConfig({
  base: '/',

  server: {
    port: 3000,
    host: '0.0.0.0',
  },

  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  ssr: {
    // three / R3F must render (or be stubbed) during the SSG pass, not externalized.
    noExternal: ['three', '@react-three/fiber', '@react-three/drei', 'motion'],
  },

  // Consumed by vite-react-ssg during the build.
  ssgOptions: {
    // Emit a 404.html (rendered by the catch-all route) for GitHub Pages fallbacks.
    includedRoutes(paths) {
      return [...paths, '/404'];
    },
  },
} as UserConfig & { ssgOptions: Record<string, unknown> });
