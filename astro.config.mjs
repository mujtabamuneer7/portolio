import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Assuming you are using Tailwind

// https://astro.build/config
export default defineConfig({
  // Your exact InfinityFree URL
  site: 'https://mujtabamuneer.is-great.net',
  
  // This ensures your site works even if the user types it without "index.html"
  base: '/',
  
  // This helps with CSS/JS loading on some free hosting providers
  build: {
    assets: '_astro'
  },

  integrations: [tailwind()]
});
