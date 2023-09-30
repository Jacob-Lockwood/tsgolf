import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://jacobofbrooklyn.github.io",
  base: "/tsgolf",
  integrations: [tailwind()]
});
