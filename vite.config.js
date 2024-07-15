import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import dns from 'node:dns';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({
    include: "**/*.svg?react",
  })],
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})