<script lang="ts" setup>
import { ProductAPIResponseType } from "~/types/products-api.type";

defineProps<{
  product: ProductAPIResponseType;
}>();
</script>

<template>
  <div
    v-if="+product.discountPercentage > 0"
    class="flex flex-row items-center gap-2"
  >
    <p>{{ product.discountPercentage }}</p>
    <p>{{ product.original_price }}</p>
  </div>
</template>
