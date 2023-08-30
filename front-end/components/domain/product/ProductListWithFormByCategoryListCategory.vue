<script lang="ts" setup>
import { CategoriesApiResponseType } from "~/types/categories-api.type";

defineProps<{
  subCategory: CategoriesApiResponseType
}>();
</script>

<template>
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
</template>
