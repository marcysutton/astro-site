import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://marcysutton.com',
  integrations: [
    mdx(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },
  output: 'static',
  // Handle redirects that were previously in _redirects
  redirects: {}
});
