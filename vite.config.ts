import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      tanstackRouter({
        target: 'react',
        autoCodeSplitting: true,
        generatedRouteTree: './src/route-tree.gen.ts',
        routesDirectory: './src/pages',
        routeToken: 'layout'
      }),
      react(),
      tailwindcss(),
    ],
    server: {
      proxy: mode === "development"
        ? {
            "/api": {
              target: "http://192.168.155.60:5001/",
              changeOrigin: true,
              secure: false,
              rewrite: (path) => path.replace('/^/api/', ""),
            },
          }
        : undefined,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})