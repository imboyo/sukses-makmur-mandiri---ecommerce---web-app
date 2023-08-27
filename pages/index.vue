<script lang="ts" setup>
import { useHead } from "unhead";
import ProductCarouselSection from "~/components/domain/product/ProductCarouselSection.vue";
import VContainer from "~/components/ui/container/VContainer.vue";
import CategoryChoosenList from "~/components/domain/category/CategoryChoosenList.vue";

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

  <VContainer>
    <CategoryChoosenList />
  </VContainer>
</template>
