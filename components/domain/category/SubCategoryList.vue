<script setup lang="ts">
import CategoryCard from "~/components/domain/category/CategoryCard.vue";
import VSkeletonLoader from "~/components/ui/skeleton/VSkeletonLoader.vue";
import { CategoriesApiResponseType } from "~/types/categories-api.type";

defineProps<{
  isLoading: boolean;
  error: unknown;
  data: CategoriesApiResponseType;
  isSuccess: boolean;
  paramsId: string[] | string;
}>();
</script>

<template>
  <template v-if="isLoading">
    <div
      class="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <VSkeletonLoader v-for="n in 6" :key="n" />
    </div>
  </template>

  <template v-else-if="error">
    <div class="text-center">
      <h1 class="text-2xl font-semibold text-gray-700">
        {{ error }}
      </h1>
    </div>
  </template>

  <template v-else-if="isSuccess">
    <div
      class="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      <CategoryCard
        v-for="category in data.children"
        :key="category.id"
        :title="category.name"
        :link="`/kategori/${paramsId}/${category.id}`"
      />
    </div>
  </template>
</template>
