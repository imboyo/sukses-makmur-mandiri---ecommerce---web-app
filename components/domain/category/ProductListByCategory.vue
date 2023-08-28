<script setup lang="ts">
import VInputDropdown from "~/components/ui/Input/VInputDropdown.vue";
import { ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { getProductsService } from "~/services/product/get-products.service";
import ProductList from "~/components/domain/product/ProductList.vue";

const categoryState = ref("");
const subCategoryState = ref("");
const subSubCategoryState = ref("");

const currPageState = ref(1);

const { isLoading, error, data, isSuccess } = useQuery({
  queryKey: [
    "products",
    categoryState,
    subCategoryState,
    subSubCategoryState,
    currPageState,
  ],
  // TODO: Change this to your own service
  queryFn: () => getProductsService(),
});

// * Emitter
defineEmits(["update:modelValue"]);
</script>

<template>
  <section class="py-[50px]">
    <!-- * Heading/Title -->
    <h1 class="text-xl font-semiBold">Popular Product Ranking</h1>

    <!-- Region: Form Input -->
    <div class="flex flex-col gap-2">
      <VInputDropdown
        label="Kategori"
        :items="['Item 1', 'Item 2', 'Item 3']"
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
      :curr-page="currPageState"
      :data="data"
      @update:curr-page="currPageState = $event"
      :is-loading="isLoading"
      :error="error"
    />
  </section>
</template>
