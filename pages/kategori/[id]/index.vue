<script lang="ts" setup>
import { useRoute } from "vue-router";
import VBreadcrumb from "~/components/ui/breadcrumb/VBreadcrumb.vue";
import VContainer from "~/components/ui/container/VContainer.vue";
import { useQuery } from "@tanstack/vue-query";
import { getCategoriesSubService } from "~/services/category/get-categories-sub.service";
import { computed } from "vue";
import { ComponentBreadcrumbType } from "~/types/component-breadcrumb";
import ProductList from "~/components/domain/product/ProductList.vue";
import VInputDropdown from "~/components/ui/Input/VInputDropdown.vue";
import SubCategoryList from "~/components/domain/category/SubCategoryList.vue";
import VTextInput from "~/components/ui/Input/VTextInput.vue";
import CategorySideFilterItem from "~/components/domain/category/CategorySideFilterItem.vue";
import { useProductList } from "~/composables/domain/product/useProductList";
import { useHead } from "unhead";

const route = useRoute();

useHead({
  title: "Kategori",
  meta: [
    {
      // TODO: Change this to your own description
      name: "description",
      content: "This is a hello world page",
    },
  ],
});

// * Category List
const {
  data: categoryData,
  isLoading: categoryIsLoading,
  isSuccess: categoryIsSuccess,
  error: categoryError,
} = useQuery({
  queryKey: ["kategori", route.params.id],
  queryFn: () => getCategoriesSubService(+route.params.id),
});

// * Breadcrumb
const breadcrumb = computed(() => {
  if (categoryIsSuccess.value) {
    return [
      {
        text: "Kategori",
        href: "/kategori",
      },
      {
        text: `${categoryData.value?.name}`,
        href: `/kategori/${route.params.id}`,
      },
    ];
  }

  const breadcrumb: ComponentBreadcrumbType[] = [
    {
      text: "Kategori",
      href: "/kategori",
    },
    {
      text: `${route.params.id}`,
      href: `/kategori/${route.params.id}`,
    },
  ];

  return breadcrumb;
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
} = useProductList();
</script>

<template>
  <Head v-if="categoryData">
    <Title>Kategori - {{ categoryData.name }}</Title>
  </Head>

  <VContainer class="mt-6 flex flex-col gap-8">
    <!--  Region: Category List  -->
    <VBreadcrumb :items="breadcrumb" />
    <SubCategoryList
      :is-loading="categoryIsLoading"
      :data="categoryData"
      :error="categoryError"
      :is-success="categoryIsSuccess"
      :params-id="route.params.id || '0'"
    />

    <section class="grid lg:grid-cols-5 lg:gap-8">
      <!--  Region: Filter Form   -->
      <div class="lg:col-span-1 flex flex-col gap-4">
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
            v-model="productLocationState"
            name="min-price"
            placeholder="Harga Minimum"
            prepend-icon="fa6-solid:rupiah-sign"
            @keyup.enter="productRefetch"
            type="number"
          />
          <VTextInput
            v-model="productLocationState"
            name="max-price"
            placeholder="Harga Maksimum"
            prepend-icon="fa6-solid:rupiah-sign"
            @keyup.enter="productRefetch"
            type="number"
          />
        </CategorySideFilterItem>
      </div>

      <!-- Region: Product List -->
      <div class="mt-4 lg:mt-0 lg:col-span-4">
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
