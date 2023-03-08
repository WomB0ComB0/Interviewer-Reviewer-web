import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import typescript from "@vitejs/plugin-typescript";
import { VitePWA} from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // typescript(),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.svg",
        "favicon.ico",
        "robots.txt",
        "apple-touch-icon.png",
      ],
      manifest: {
        name: "Interviewer Reviewer",
        short_name: "Interviewer Reviewer",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        "start_url": "/",
        icons: [
          {
            src: "**/logo.svg",
            type: "image/svg+xml",
            sizes: "any",
            purpose: "maskable"
          },
        ],
      },
    }),
  ],
  
  // Research 🫠, seems useful. Look like an API route
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
});