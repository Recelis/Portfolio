import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 5173
  },
  plugins: [vue()],
});
