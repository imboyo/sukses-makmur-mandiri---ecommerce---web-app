<script lang="ts" setup>
import { useHead } from "unhead";
import { onMounted, watch } from "vue";
import {useRoute, useRouter} from "vue-router";
import ProductList from "~/components/domain/product/ProductList.vue";
import VContainer from "~/components/ui/container/VContainer.vue";
import CategorySideFilterItem from "~/components/domain/category/CategorySideFilterItem.vue";
import VTextInput from "~/components/ui/Input/VTextInput.vue";
import VInputDropdown from "~/components/ui/Input/VInputDropdown.vue";
import { useProductList } from "~/composables/useProductList";
import {useQuery} from "@tanstack/vue-query";
import {getProductsService} from "~/services/product/get-products.service";

useHead({
  title: "Kategori",
  meta: [
    {
      // TODO: Change this to your own description
      name: "Pencarian",
      content: "This is a hello world page",
    },
  ],
});

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
  queryKey: ["products", currPageState, sortByState, searchQueryState],
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
  <VContainer class="mt-6 flex flex-col lg:gap-8">
    <div v-if="searchQueryState.length === 0">
      <!-- No Product Find Statement -->
      <div class="flex flex-col items-center justify-center h-[300px]">
        <h1 class="text-2xl font-bold">Tidak ada produk yang ditemukan</h1>
        <p class="text-sm text-gray-500">Coba cari dengan kata kunci lain</p>
      </div>
    </div>

    <template v-else>
      <section class="grid lg:grid-cols-5 lg:gap-8">
        <!--  Region: Filter Form   -->
        <div class="flex flex-col gap-4 lg:col-span-1">
          <CategorySideFilterItem label="Lokasi">
            <VTextInput
              v-model.lazy="locationState"
              name="Lokasi"
              placeholder="Lokasi"
              prepend-icon="mdi:location"
              @keyup.enter="refetch"
            />
          </CategorySideFilterItem>

          <CategorySideFilterItem label="Harga">
            <VTextInput
              v-model.lazy="minPriceState"
              name="min-price"
              placeholder="Harga Minimum"
              prepend-icon="fa6-solid:rupiah-sign"
              @keyup.enter="refetch"
              type="number"
            />
            <VTextInput
              v-model.lazy="maxPriceState"
              name="max-price"
              placeholder="Harga Maksimum"
              prepend-icon="fa6-solid:rupiah-sign"
              @keyup.enter="refetch"
              type="number"
            />
          </CategorySideFilterItem>
        </div>

        <!-- Region: Product List -->
        <div class="mt-4 lg:col-span-4 lg:mt-0">
          <VInputDropdown
            label="Urut Berdasarkan"
            :items="['Terbaru', 'Harga']"
            v-model="sortByState"
            @update:model-value="refetch"
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
  </VContainer>
</template>
