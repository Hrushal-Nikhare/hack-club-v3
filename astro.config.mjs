import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
// import vercel from "@astrojs/vercel/serverless";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  // output: "server",
  // adapter: vercel(),
  compressHTML: true,
  site: "https://beta.hrushalnikhare.xyz",
  integrations: [mdx(), sitemap(), image()]
});