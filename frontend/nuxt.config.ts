// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devServer: { port: 3010 },
  devtools: { enabled: true },

  modules: ["@nuxt/fonts", "@primevue/nuxt-module"],

  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: false
        }
      }
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  $production: {},
  $development: {}
});
