import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        fitWeak: 'fitWeek.html',
        category: 'category.html',
        article: 'article.html',
        article2: 'article copy.html',
      },
    },
  },
});