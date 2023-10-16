import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypePrettyCode from "rehype-pretty-code";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
const rehypePrettyCodeOptions = {
  theme: "material-theme-lighter",
};

// https://astro.build/config
export default defineConfig({
  site: "https://frago.dev",
  redirects: {
    "/blog": "/",
  },
  integrations: [
    mdx({
      rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
    }),
    sitemap({
      filter: (page) => page.search(/\/drafts\//g) === -1,
    }),
    tailwind(),
  ],
  markdown: {
    syntaxHighlight: false,
  },
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
