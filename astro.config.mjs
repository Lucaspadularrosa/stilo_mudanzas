import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'mudanzastilo.com.ar',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});