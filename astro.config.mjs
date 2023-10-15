import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypePrettyCode from "rehype-pretty-code";

import tailwind from "@astrojs/tailwind";

const rehypePrettyCodeOptions = {
  theme: "material-theme-lighter",
};

// https://astro.build/config
export default defineConfig({
  site: "https://frago.dev",
  integrations: [
    mdx({
      rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
    }),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    syntaxHighlight: false,
  },
});
