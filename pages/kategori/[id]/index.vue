<script lang="ts" setup>
import { useRoute } from "vue-router";
import VBreadcrumb from "~/components/ui/breadcrumb/VBreadcrumb.vue";
import VContainer from "~/components/ui/container/VContainer.vue";
import { useQuery } from "@tanstack/vue-query";
import { getCategoriesSubService } from "~/services/category/get-categories-sub.service";
import { computed, ref } from "vue";
import { ComponentBreadcrumbType } from "~/types/component-breadcrumb";
import { getProductsService } from "~/services/product/get-products.service";
import ProductList from "~/components/domain/product/ProductList.vue";
import VInputDropdown from "~/components/ui/Input/VInputDropdown.vue";
import SubCategoryList from "~/components/domain/category/SubCategoryList.vue";

const route = useRoute();

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
const currPage = ref(1);
const sortByState = ref("Terbaru");
const {
  isLoading: productIsLoading,
  error: productError,
  data: productData,
} = useQuery({
  queryKey: ["products", categoryIsSuccess, sortByState],
  // TODO: Change this to your own service
  queryFn: () => getProductsService(),
});
</script>

<template>
  <VContainer class="mt-6 flex flex-col gap-8">
    <!--  Region: Category List  -->
    <VBreadcrumb :items="breadcrumb" />
    <SubCategoryList
      :is-loading="categoryIsLoading"
      :data="categoryData"
      :error="categoryError"
      :is-success="categoryIsSuccess"
      :params-id="route.params.id"
    />

    <section class="grid grid-cols-5 gap-8">
      <!--  Region: Filter Form   -->
      <div class="col-span-1"></div>

      <!-- Region: Product List -->
      <div class="col-span-4">
        <VInputDropdown
          label="Urut Berdasarkan"
          :items="['Terbaru', 'Harga']"
          v-model="sortByState"
        />
        <ProductList
          :is-loading="productIsLoading"
          :curr-page="currPage"
          :data="productData"
          :error="productError"
        />
      </div>
    </section>
  </VContainer>
</template>
