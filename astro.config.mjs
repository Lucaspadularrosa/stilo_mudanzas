import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Lucaspadularrosa.github.io',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});