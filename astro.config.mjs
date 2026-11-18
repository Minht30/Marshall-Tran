// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://minhcode.netlify.app',
  trailingSlash: 'never',
  build: { format: 'directory' },
  integrations: [mdx(), sitemap()],
  image: {
    // Screenshots are resized at build time; never ship the 4-5 MB originals.
    layout: 'constrained',
  },
});
