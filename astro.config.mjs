// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://cakra17.github.io",
  base: "/Portofolio/",

  output:'static',

  server: {
    port: 6969
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()],
});
