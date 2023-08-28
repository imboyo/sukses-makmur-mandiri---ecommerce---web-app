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

    <!--  Region: Product Data and State Handling  -->
    <!-- TODO: Use More Robust Loading State -->
    <div v-if="isLoading">
      <!-- Skeleton Loader with Tailwind -->
      <div
        class="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      >
        <VSkeletonLoader v-for="product in 50" :key="product" />
      </div>
    </div>

    <!--  TODO: Use More Robust Error State -->
    <div v-if="error">Something Went Wrong</div>

    <ProductList
      v-if="isSuccess && data"
      :curr-page="currPage"
      :data="data"
      @update:curr-page="currPage = $event"
    />
  </section>
</template>
