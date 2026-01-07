import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Use the EXACT domain you just gave me
  site: 'https://mujtabamuneer.great-site.net',
  base: '/', 
  integrations: [tailwind()],
  build: {
    assets: '_astro' // This ensures files go to the right folder on InfinityFree
  }
});
