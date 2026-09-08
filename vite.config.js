import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base matches the GitHub Pages project URL; change if moving to a custom domain
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
});
