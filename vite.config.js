import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@components", replacement: "/src/components" },
      { find: "@layouts", replacement: "/src/layouts" },
      { find: "@utils", replacement: "/src/utils" },
      { find: "@api", replacement: "/src/api" },
      { find: "@data", replacement: "/src/data" },
    ],
  },
});
