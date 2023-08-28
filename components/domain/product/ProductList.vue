<script setup lang="ts">
import ProductCard from "~/components/domain/product/ProductCard.vue";
import VPagination from "~/components/ui/pagination/VPagination.vue";
import { ProductsAPIResponseType } from "~/types/products-api.type";

defineProps<{
  data: ProductsAPIResponseType;
  currPage: number;
}>();

defineEmits(["update:currPage"]);
</script>

<template>
  <slot name="products">
    <div
      class="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
    >
      <template v-for="product in data.data" :key="product.id">
        <ProductCard :product="product" />
      </template>
    </div>
  </slot>

  <VPagination
    :total-page="data.pageInfo.totalPage"
    @update:model-value="$emit('update:currPage', $event)"
    :current-page="currPage"
  />
</template>
