// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const ToutSurMaVillePreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{sky.50}',
      100: '{sky.100}',
      200: '{sky.200}',
      300: '{sky.300}',
      400: '{sky.400}',
      500: '{sky.500}',
      600: '{sky.600}',
      700: '{sky.700}',
      800: '{sky.800}',
      900: '{sky.900}',
      950: '{sky.950}',
    },
  },
});

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devServer: { port: 3010 },
  devtools: { enabled: true },

  // 🆎 SEO
  app: {
    head: {
      title: 'Tout sur ma ville',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

  modules: [
    // 📏 Linters
    '@nuxt/eslint',
    // 🖋️ Fonts
    '@nuxt/fonts',
    // 🧱 UI Library
    '@primevue/nuxt-module',
  ],

  // 🎨 UI
  primevue: {
    options: {
      theme: {
        preset: ToutSurMaVillePreset,
        options: {
          darkModeSelector: false,
        },
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  $production: {},
  $development: {},
});
