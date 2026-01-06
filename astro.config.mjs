import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // 1. Important for InfinityFree: set your actual domain
  site: 'https://your-domain.infinityfreeapp.com', 
  
  // 2. Set to '/' if your site is in htdocs, or '/folder/' if in a subfolder
  base: '/', 

  integrations: [tailwind()],
  
  build: {
    // 3. This ensures links like /about become /about.html for compatibility
    format: 'file', 
  },
});
