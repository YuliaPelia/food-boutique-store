// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  i18n: {
    locales: ["ua", "en"],
    defaultLocale: "en",
  },

  integrations: [react(), tailwind()],
});
