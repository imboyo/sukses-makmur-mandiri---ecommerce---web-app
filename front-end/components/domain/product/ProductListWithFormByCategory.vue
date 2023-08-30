<script setup lang="ts">
import ProductList from "~/components/domain/product/ProductList.vue";
import { useQuery } from "@tanstack/vue-query";
import { getProductsService } from "~/services/product/get-products.service";
import { useRouter } from "vue-router";
import { useProductList } from "~/composables/useProductList";
import ProductGeneralFilterForm from "~/components/domain/product/ProductGeneralFilterForm.vue";
import { CategoriesApiResponseType } from "~/types/categories-api.type";
import CategorySideFilterItem from "~/components/domain/category/CategorySideFilterItem.vue";
import VButton from "~/components/ui/button/VButton.vue";

defineProps<{
  subCategory?: CategoriesApiResponseType | undefined;
}>();

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
    <!-- * Only Show in Desktop  -->
    <div class="flex-col gap-4 col-span-full hidden lg:flex lg:col-span-1">
      <CategorySideFilterItem v-if="subCategory" label="Kategori">
        <div class="h-[300px] overflow-auto lg:max-h-[400px]">
          <NuxtLink
            v-for="category in subCategory.children"
            :key="category.id"
            :to="`/kategori/${subCategory.id}/${category.id}`"
          >
            <div
              class="px-4 py-2 hover:bg-primary-50 transition duration-300 rounded-lg text-xs"
            >
              {{ category.name }}
            </div>
          </NuxtLink>
        </div>
      </CategorySideFilterItem>
      <hr />

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
    <div class="mt-4 col-span-full lg:col-span-4 lg:mt-0">
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
