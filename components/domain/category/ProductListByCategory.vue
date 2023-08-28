<script setup lang="ts">
import VInputDropdown from "~/components/ui/Input/VInputDropdown.vue";
import { ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { getProductsService } from "~/services/product/get-products.service";
import ProductList from "~/components/domain/product/ProductList.vue";
import VSkeletonLoader from "~/components/ui/skeleton/VSkeletonLoader.vue";

const categoryState = ref("");
const subCategoryState = ref("");
const subSubCategoryState = ref("");

const currPage = ref(1);

defineEmits(["update:modelValue"]);

const { isLoading, error, data, isSuccess } = useQuery({
  queryKey: [
    "products",
    categoryState,
    subCategoryState,
    subSubCategoryState,
    currPage,
  ],
  // TODO: Change this to your own service
  queryFn: () => getProductsService(),
});
</script>

<template>
  <section class="py-[50px]">
    <!-- * Heading/Title -->
    <h1 class="text-xl font-semiBold">Popular Product Ranking</h1>

    <!-- Region: Form Input -->
    <div class="flex flex-col gap-2">
      <VInputDropdown
        label="Kategori"
        :items="['Item 1']"
        @update:model-value="categoryState = $event"
      />
      <VInputDropdown
        label="Sub Kategori"
        :items="[]"
        @update:model-value="subCategoryState = $event"
      />
      <VInputDropdown
        label="Sub Kategori"
        :items="[]"
        @update:model-value="subSubCategoryState = $event"
      />
    </div>

    <ProductList
      v-if="isSuccess && data"
      :curr-page="currPage"
      :data="data"
      @update:curr-page="currPage = $event"
      :is-loading="isLoading"
      :error="error"
    />
  </section>
</template>
