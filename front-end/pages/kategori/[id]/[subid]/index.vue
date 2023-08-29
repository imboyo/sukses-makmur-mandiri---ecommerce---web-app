<script lang="ts" setup>
// Kategori/[id]/[subid]
import { useRoute } from "vue-router";
import { computed } from "vue";
import VBreadcrumb from "~/components/ui/breadcrumb/VBreadcrumb.vue";
import { useQuery } from "@tanstack/vue-query";
import {
  getCategoriesSubService,
} from "~/services/category/get-categories-sub.service";
import VTextInput from "~/components/ui/Input/VTextInput.vue";
import ProductList from "~/components/domain/product/ProductList.vue";
import VInputDropdown from "~/components/ui/Input/VInputDropdown.vue";
import CategorySideFilterItem from "~/components/domain/category/CategorySideFilterItem.vue";
import VContainer from "~/components/ui/container/VContainer.vue";
import { useProductList } from "~/composables/domain/product/useProductList";

const route = useRoute();

// * Category List
const { data: categoryData, isSuccess: categoryIsSuccess } = useQuery({
  queryKey: ["kategori", route.params.id, route.params.subid],
  queryFn: () => getCategoriesSubService(+route.params.id),
});

const breadcrumb = computed(() => {
  if (categoryIsSuccess.value) {
    const categorySubSubChildren = categoryData.value?.children?.find(
      (item) => {
        return item.id === +route.params.subid;
      },
    );

    return [
      {
        text: "Kategori",
        href: "/kategori",
      },
      {
        text: `${categoryData.value?.name}`,
        href: `/kategori/${route.params.id}`,
      },
      {
        text: `${categorySubSubChildren?.name}`,
        href: `/kategori/${route.params.id}/${route.params.subid}`,
      },
    ];
  }

  return [
    {
      text: "Kategori",
      href: "/kategori",
    },
    {
      text: "Loading...",
      href: "/kategori",
    },
    {
      text: "Loading...",
      href: "/kategori",
    },
  ];
});

// * Product List
const {
  data: productData,
  isLoading: productIsLoading,
  error: productError,
  refetch: productRefetch,
  currPageState,
  sortByState,
  productLocationState,
  minPriceState,
  maxPriceState,
} = useProductList();
</script>

<template>
  <VContainer class="mt-6 flex flex-col gap-8">
    <VBreadcrumb :items="breadcrumb" />

    <section class="grid lg:grid-cols-5 lg:gap-8">
      <!--  Region: Filter Form   -->
      <div class="flex flex-col gap-4 lg:col-span-1">
        <CategorySideFilterItem label="Lokasi">
          <VTextInput
            v-model="productLocationState"
            name="Lokasi"
            placeholder="Lokasi"
            prepend-icon="mdi:location"
            @keyup.enter="productRefetch"
          />
        </CategorySideFilterItem>

        <CategorySideFilterItem label="Harga">
          <VTextInput
            v-model="minPriceState"
            name="min-price"
            placeholder="Harga Minimum"
            prepend-icon="fa6-solid:rupiah-sign"
            @keyup.enter="productRefetch"
            type="number"
          />
          <VTextInput
            v-model="maxPriceState"
            name="max-price"
            placeholder="Harga Maksimum"
            prepend-icon="fa6-solid:rupiah-sign"
            @keyup.enter="productRefetch"
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
          @update:model-value="productRefetch"
        />
        <ProductList
          :is-loading="productIsLoading"
          :curr-page="currPageState"
          :data="productData"
          :error="productError"
          @update:curr-page="currPageState = $event"
        />
      </div>
    </section>
  </VContainer>
</template>
