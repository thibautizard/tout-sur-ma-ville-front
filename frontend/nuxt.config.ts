// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devServer: { port: 3010 },
  devtools: { enabled: true },

  modules: ["@nuxt/fonts"],

  vite: {
    plugins: [tailwindcss()]
  },

  $production: {},
  $development: {}
});
