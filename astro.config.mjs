// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import path from "path";
import { fileURLToPath } from "url";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  i18n: {
    locales: ["ua", "en"],
    defaultLocale: "en",
  },

  
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  integrations: [react(), tailwind(), icon()],
});
