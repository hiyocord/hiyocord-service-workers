import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  build: {
    sourcemap: true
  },
  plugins: [
    cloudflare()
  ]
});
