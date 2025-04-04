// tailwind / shadcn-ui
import path from "path"
import tailwindcss from "@tailwindcss/vite"
// vite
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For Tauri development
const host = process.env.TAURI_DEV_HOST;

// https://vitejs.dev/config/
export default defineConfig(async () => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
  //
  // 1. prevent vite from obscuring rust errors
  clearScreen: false,
  // 2. tauri expects a fixed port, fail if that port is not available
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host
      ? {
          protocol: "ws",
          host,
          port: 1421,
        }
      : undefined,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
  // Vitest configuration
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test/vitest.setup.ts'],
    css: true,
    include: ['src/**/__tests__/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/e2e/**', '**/playwright.config.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        '**/node_modules/**', 
        '**/*.d.ts', 
        '**/*.config.ts', 
        '**/test/**',
        '**/src-tauri/target/**',
        '**/__global-api-script.js'
      ]
    },
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
}));
