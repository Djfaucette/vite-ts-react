import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/security/",
  server: {
    port: 3000,
    strictPort: true,
    hmr: {
      host: "127.0.0.1",
      protocol: "ws",
    },
  },
})
