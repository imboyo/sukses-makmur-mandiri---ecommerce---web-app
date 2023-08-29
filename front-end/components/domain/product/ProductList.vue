<script setup lang="ts">
import ProductCard from "~/components/domain/product/ProductCard.vue";
import VPagination from "~/components/ui/pagination/VPagination.vue";
import { ProductsAPIResponseType } from "~/types/products-api.type";
import VSkeletonLoader from "~/components/ui/skeleton/VSkeletonLoader.vue";

defineProps<{
  data: ProductsAPIResponseType | undefined | null;
  currPage: number;
  isLoading: boolean;
  error: unknown;
}>();

defineEmits(["update:currPage"]);
</script>

<template>
  <template v-if="isLoading">
    <!-- Skeleton Loader with Tailwind -->
    <div
      class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
    >
      <VSkeletonLoader v-for="product in 50" :key="product" />
    </div>
  </template>

  <!--  TODO: Use More Robust Error State -->
  <div v-else-if="error">Something Went Wrong</div>

  <template v-else-if="data">
    <div
      class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
    >
      <template v-for="product in data.data" :key="product.id">
        <ProductCard :product="product" />
      </template>
    </div>

    <VPagination
      :total-page="data.pageInfo.totalPage"
      @update:model-value="$emit('update:currPage', $event)"
      :current-page="currPage"
    />
  </template>

  <!-- To prevent slot warn -->
  <div v-else class="hidden"></div>
</template>
