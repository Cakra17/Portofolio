// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output:'static',

  server: {
    port: 6969
  },

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel(),
});