<script lang="ts" setup>
import _ from "lodash-es";
import { ProductAPIResponseType } from "~/types/products-api.type";
import PrivateProductCardShopItem from "~/components/domain/product/_ProductCardShopItem.vue";
import PrivateProductCardDiscountItem from "~/components/domain/product/_ProductCardDiscountItem.vue";

defineProps<{
  product: ProductAPIResponseType;
}>();
</script>

<template>
  <div class="flex flex-col overflow-hidden rounded-2xl border border-gray-300">
    <div class="w-full overflow-hidden h-[165px]">
      <img
        :src="product.imageUrl"
        :alt="product.name"
        class="h-full w-full object-cover"
      />
    </div>

    <div class="flex flex-col gap-2 px-2.5 py-2.5">
      <!-- Product Thumbnail -->
      <p class="text-sm text-primary-700">
        {{
          _.truncate(product.name, {
            length: 40,
            omission: "...",
          })
        }}
      </p>

      <!--  Product Price -->
      <p class="text-xs font-semiBold text-gray-900">
        {{ product.price }}
      </p>

      <!-- Optional Block - Discount  -->
      <PrivateProductCardDiscountItem
        v-if="product.discountPercentage > 0"
        :product="product"
      />

      <!-- * Product Shop -->
      <PrivateProductCardShopItem icon="mdi:location">
        {{ product.shop.location }}
      </PrivateProductCardShopItem>

      <PrivateProductCardShopItem icon="mdi:store">
        {{ product.shop.name }}
      </PrivateProductCardShopItem>

      <!-- Total Product Selled -->
      <p class="text-xs text-gray-500">
        Terjual {{ product.countReview.toLocaleString() }}
      </p>
    </div>
  </div>
</template>
