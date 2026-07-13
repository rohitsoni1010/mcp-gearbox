import { defineConfig } from 'vitest/config';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [
    react(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    // Playwright e2e specs live in tests/e2e and must run via `npm run test:e2e`,
    // not be collected by Vitest (their test() calls throw under Vitest).
    exclude: ['**/node_modules/**', '**/dist/**', '**/.vite/**', '**/tests/e2e/**'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
