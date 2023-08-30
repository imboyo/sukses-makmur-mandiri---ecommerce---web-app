<script setup lang="ts">
import VInputDropdown from "~/components/ui/Input/VInputDropdown.vue";
import ProductList from "~/components/domain/product/ProductList.vue";
import ProductGeneralFilterForm from "~/components/domain/product/ProductGeneralFilterForm.vue";
import { useRoute, useRouter } from "vue-router";
import { useProductList } from "~/composables/useProductList";
import { useQuery } from "@tanstack/vue-query";
import { getProductsService } from "~/services/product/get-products.service";
import { onMounted, watch } from "vue";

const route = useRoute();
const router = useRouter();

const {
  currPageState,
  sortByState,
  minPriceState,
  maxPriceState,
  locationState,
  searchQueryState,
} = useProductList();

// ! Dont ever place useQuery in composables. It will cause bugs. Use it directly in the component
const { data, isInitialLoading, refetch, error } = useQuery({
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
      locationState.value,
      searchQueryState.value,
    ),
});

const queryParamHandle = async () => {
  // Get query params [q] from URL and check it is empty or not
  const q = route.query.q ? route.query.q : null;

  // Refetch data when query params [q] is not empty
  if (!q) {
    searchQueryState.value = "";
  } else {
    searchQueryState.value = q as string;
    await refetch();
  }
};

onMounted(() => {
  (async () => {
    await queryParamHandle();
  })();
});

watch(
  () => route.query.q,
  () => {
    (async () => {
      await queryParamHandle();
    })();
  },
);
</script>

<template>
  <section class="grid lg:grid-cols-5 lg:gap-8">
    <!--  Region: Filter Form   -->
    <div class="flex flex-col gap-4 lg:col-span-1">
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
      <VInputDropdown
        label="Urut Berdasarkan"
        :items="['Terbaru', 'Harga']"
        v-model="sortByState"
      />
      <ProductList
        :is-loading="isInitialLoading"
        :curr-page="currPageState"
        :data="data"
        :error="error"
        @update:curr-page="currPageState = $event"
      />
    </div>
  </section>
</template>
