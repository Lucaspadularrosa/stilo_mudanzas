import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tudominio.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});