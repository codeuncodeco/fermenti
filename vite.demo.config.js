import { defineConfig } from 'vite';

/**
 * Vite config for building the demo site as a deployable bundle.
 * Usage: pnpm run build:site
 *
 * Bundles all demo JS + framework source + CSS into demo-dist/
 * so the hosted site doesn't need to serve raw source files.
 */
export default defineConfig({
  root: '.',
  base: './',
  build: {
    outDir: 'demo-dist',
    emptyOutDir: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
});
