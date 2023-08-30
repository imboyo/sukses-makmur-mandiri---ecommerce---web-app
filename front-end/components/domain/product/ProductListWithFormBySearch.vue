<script setup lang="ts">
import ProductList from "~/components/domain/product/ProductList.vue";
import ProductGeneralFilterForm from "~/components/domain/product/ProductGeneralFilterForm.vue";
import { useRoute, useRouter } from "vue-router";
import { useProductList } from "~/composables/useProductList";
import { useQuery } from "@tanstack/vue-query";
import { getProductsService } from "~/services/product/get-products.service";
import { onMounted, watch } from "vue";
import VButton from "~/components/ui/button/VButton.vue";
import VModal from "~/components/ui/modal/VModal.vue";
import { ref } from "vue";

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

const filterFormIsOpen = ref(false);
</script>

<template>
  <section class="grid lg:grid-cols-5 lg:gap-8">
    <!--  Region: Filter Form   -->
    <div class="flex-col col-span-full gap-4 lg:col-span-1 hidden lg:flex">
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

    <!-- Region: Mobile Dialog/Modal Form for Filtering -->
    <VButton
      class="flex lg:hidden"
      @click="filterFormIsOpen = true"
      width="full"
      >Filter Produk
    </VButton>

    <VModal :is-open="filterFormIsOpen" @close="filterFormIsOpen = false">
      <ProductGeneralFilterForm
        @submit="
          (event) => {
            locationState = event.location;
            minPriceState = event.minPrice;
            maxPriceState = event.maxPrice;
          }
        "
        @update:sort-by-state="sortByState = $event"
      >
        <template #submit>
          <VButton class="mt-4" width="full" @click="filterFormIsOpen = false"
            >Terapkan
          </VButton>
        </template>
      </ProductGeneralFilterForm>
    </VModal>
    <!-- End Region: Mobile Dialog/Modal Form for Filtering -->

    <!-- Region: Product List -->
    <div class="mt-4 lg:col-span-4 lg:mt-0">
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
