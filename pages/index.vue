<script lang="ts" setup>
import { useHead } from "unhead";
import ProductCarouselSection from "~/components/domain/product/ProductCarouselSection.vue";

useHead({
  title: "Sukses Makmur Mandiri",
  meta: [
    {
      // TODO: Change this to your own description
      name: "description",
      content: "This is a hello world page",
    },
  ],
});
</script>

<template>
  <ProductCarouselSection />
</template>
