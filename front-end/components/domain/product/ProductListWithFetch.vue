<script setup lang="ts">
import CategorySideFilterItem from "~/components/domain/category/CategorySideFilterItem.vue";
import VTextInput from "~/components/ui/Input/VTextInput.vue";
import ProductList from "~/components/domain/product/ProductList.vue";
import VInputDropdown from "~/components/ui/Input/VInputDropdown.vue";
import { useQuery } from "@tanstack/vue-query";
import { getProductsService } from "~/services/product/get-products.service";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();

const currPageState = ref(1);
const sortByState = ref("");
const productLocationState = ref("");
const searchQueryState = ref("");
const locationState = ref("");
const minPriceState = ref<null | number>(null);
const maxPriceState = ref<null | number>(null);

// ! Dont ever place useQuery in composables. It will cause bugs. Use it directly in the component
// * Product List Fetching
const { data, isLoading, refetch, error } = useQuery({
  queryKey: ["products", currPageState, sortByState, searchQueryState],
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
    <div class="flex flex-col gap-4 lg:col-span-1">
      <CategorySideFilterItem label="Lokasi">
        <VTextInput
          v-model="locationState"
          name="Lokasi"
          placeholder="Lokasi"
          prepend-icon="mdi:location"
          @keyup.enter="refetch"
        />
      </CategorySideFilterItem>

      <CategorySideFilterItem label="Harga">
        <VTextInput
          v-model="minPriceState"
          name="min-price"
          placeholder="Harga Minimum"
          prepend-icon="fa6-solid:rupiah-sign"
          @keyup.enter="refetch"
          type="number"
        />
        <VTextInput
          v-model="maxPriceState"
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
        @update:model-value="sortByState = $event"
      />
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
