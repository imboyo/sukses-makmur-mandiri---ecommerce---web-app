// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css", "vue3-carousel/dist/carousel.css"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxt/image",
    "nuxt-icon",
    "nuxt-simple-sitemap",
    "nuxt-lodash",
    "@pinia/nuxt",
  ],
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL || "http://localhost:7000",
    },
  },
});
