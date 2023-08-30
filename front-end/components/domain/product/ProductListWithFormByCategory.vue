<script setup lang="ts">
import ProductList from "~/components/domain/product/ProductList.vue";
import { useQuery } from "@tanstack/vue-query";
import { getProductsService } from "~/services/product/get-products.service";
import { useRouter } from "vue-router";
import { useProductList } from "~/composables/useProductList";
import ProductGeneralFilterForm from "~/components/domain/product/ProductGeneralFilterForm.vue";

const {
  currPageState,
  sortByState,
  minPriceState,
  maxPriceState,
  locationState,
  searchQueryState,
  productLocationState,
} = useProductList();

const router = useRouter();

// ! Dont ever place useQuery in composables. It will cause bugs. Use it directly in the component
// * Product List Fetching
const { data, isLoading, error } = useQuery({
  queryKey: [
    "products",
    currPageState,
    sortByState,
    searchQueryState,
    locationState,
    minPriceState,
    maxPriceState,
  ],
  // TODO: Change this to your own service
  queryFn: () =>
    getProductsService(
      router,
      currPageState.value,
      sortByState.value,
      productLocationState.value,
      searchQueryState.value,
    ),
});
</script>

<template>
  <section class="grid lg:grid-cols-5 lg:gap-8">
    <!--  Region: Filter Form   -->
    <div class="lg:col-span-1">
      <ProductGeneralFilterForm
        @submit="
          (event) => {
            locationState = event.location;
            minPriceState = event.minPrice;
            maxPriceState = event.maxPrice;
          }
        "
        @update:sort-by-state="sortByState = $event"
      />
    </div>

    <!-- Region: Product List -->
    <div class="mt-4 lg:col-span-4 lg:mt-0">
      <ProductList
        :is-loading="isLoading"
        :curr-page="currPageState"
        :data="data"
        :error="error"
        @update:curr-page="currPageState = $event"
      />
    </div>
  </section>
</template>
