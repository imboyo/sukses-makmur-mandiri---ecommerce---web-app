<script setup lang="ts">
import CategoryCard from "~/components/domain/category/CategoryCard.vue";
import { useQuery } from "@tanstack/vue-query";
import { getChoosenCategoriesService } from "~/services/category/get-choosen-categories.service";
import VSkeletonLoader from "~/components/ui/skeleton/VSkeletonLoader.vue";

const { data, isSuccess, isLoading, error } = useQuery({
  queryKey: ["choosen-category"],
  queryFn: getChoosenCategoriesService,
});
</script>
<template>
  <section class="flex flex-col gap-5 pt-[50px]">
    <h1 class="text-xl font-semiBold">Kategori Pilihan</h1>

    <!--  Category List -->
    <div
      class="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-8"
    >
      <template v-if="isLoading">
        <VSkeletonLoader v-for="i in 12" :key="i" />
      </template>

      <template v-else-if="error">
        <div class="col-span-full">
          <p class="text-center">Terjadi kesalahan</p>
        </div>
      </template>

      <template v-else-if="data && isSuccess">
        <CategoryCard
          v-for="category in data"
          :key="category.id"
          :title="category.name"
          :image="category.iconImageUrl"
          :link="`/kategori/${category.id}`"
        />
      </template>
    </div>
  </section>
</template>
