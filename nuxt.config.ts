// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css", "vue3-carousel/dist/carousel.css"],
  devtools: {enabled: true},
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
});
