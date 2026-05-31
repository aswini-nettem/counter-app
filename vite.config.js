import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,        // lets you use test(), expect() without importing them
    environment: 'jsdom', // fakes a browser so React can "render" in tests
    setupFiles: './src/setupTests.js', // runs before tests (we make this next)
  },
})
