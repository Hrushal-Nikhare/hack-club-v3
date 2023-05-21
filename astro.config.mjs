import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: "https://beta.hrushalnikhare.xyz",
  integrations: [sitemap(), image()]
});