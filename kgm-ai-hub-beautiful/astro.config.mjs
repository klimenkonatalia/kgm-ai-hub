import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://klimenkonatalia.github.io',
  base: '/kgm-ai-hub',
  integrations: [sitemap()],
});
