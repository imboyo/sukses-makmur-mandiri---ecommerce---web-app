<script lang="ts" setup>
import { useRoute } from "vue-router";
import VBreadcrumb from "~/components/ui/breadcrumb/VBreadcrumb.vue";
import VContainer from "~/components/ui/container/VContainer.vue";
import { useQuery } from "@tanstack/vue-query";
import { getCategoriesSubService } from "~/services/category/get-categories-sub.service";
import { computed } from "vue";
import { ComponentBreadcrumbType } from "~/types/component-breadcrumb";
import SubCategoryList from "~/components/domain/category/SubCategoryList.vue";
import { useHead } from "unhead";
import ProductListWithFetch from "~/components/domain/product/ProductListWithFetch.vue";

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

// ! Dont ever place useQuery in composables. It will cause bugs. Use it directly in the component
// * Category List Fetching
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
</script>

<template>
  <VContainer class="mt-6 flex flex-col gap-8">
    <VBreadcrumb :items="breadcrumb" />

    <SubCategoryList
      :is-loading="categoryIsLoading"
      :data="categoryData"
      :error="categoryError"
      :is-success="categoryIsSuccess"
      :params-id="route.params.id || '0'"
    />

    <ProductListWithFetch />
  </VContainer>
</template>
