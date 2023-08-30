<script lang="ts" setup>
import { useHead } from "unhead";
import VContainer from "~/components/ui/container/VContainer.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import ProductListWithFormBySearch from "~/components/domain/product/ProductListWithFormBySearch.vue";

useHead({
  title: "Kategori",
  meta: [
    {
      // TODO: Change this to your own description
      name: "Pencarian",
      content: "This is a hello world page",
    },
  ],
});

const route = useRoute();

const searchQueryState = computed(() => {
  return route.query.q ? route.query.q : null;
});
</script>

<template>
  <VContainer class="mt-6 flex flex-col lg:gap-8">
    <!-- No Product Find Statement -->
    <div v-if="!searchQueryState" class="flex flex-col items-center justify-center h-[300px]">
      <h1 class="text-2xl font-bold">Tidak ada produk yang ditemukan</h1>
      <p class="text-sm text-gray-500">Coba cari dengan kata kunci lain</p>
    </div>

    <ProductListWithFormBySearch v-else />
  </VContainer>
</template>
