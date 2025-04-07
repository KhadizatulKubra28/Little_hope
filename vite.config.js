import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";


export default defineConfig({
  build: { manifest: true },
  base: process.env.mode === "production" ? "/static/" : "/",
  root: './src',
  plugins: [reactRefresh()],
});
