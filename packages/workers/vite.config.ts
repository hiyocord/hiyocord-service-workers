import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  build: {
    target: "es2022",
    sourcemap: true,
    lib: {
      entry: "src/manifest.ts",
      formats: ["es"],
      fileName: "manifest"
    },
    rollupOptions: {
      input: {
        manifest: "src/manifest.ts"
      },
      output: {
        format: "es",
        entryFileNames: "[name].js",
      }
    }
  },
  plugins: [
    cloudflare()
  ]
});
