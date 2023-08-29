<script lang="ts" setup>
// Kategori/[id]/[subid]
import { useRoute } from "vue-router";
import { computed } from "vue";
import VBreadcrumb from "~/components/ui/breadcrumb/VBreadcrumb.vue";
import { useQuery } from "@tanstack/vue-query";
import {
  getCategoriesSubService,
} from "~/services/category/get-categories-sub.service";
import VContainer from "~/components/ui/container/VContainer.vue";
import ProductListWithFetch from "~/components/domain/product/ProductListWithFetch.vue";

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
</script>

<template>
  <VContainer class="mt-6 flex flex-col gap-8">
    <VBreadcrumb :items="breadcrumb" />

    <ProductListWithFetch />
  </VContainer>
</template>
