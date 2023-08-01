import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/edge";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind()],
  adapter: vercel({
    analytics: true,
  }),
  output: "server",
});
