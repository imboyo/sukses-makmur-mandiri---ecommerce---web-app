<script setup lang="ts">
import CategoryCard from "~/components/domain/category/CategoryCard.vue";

// TODO: Make this dynamic. receive data from Props. The data should be get from API
</script>
<template>
  <section class="flex flex-col gap-5 pt-[50px]">
    <h1 class="text-xl font-semiBold">Kategori Pilihan</h1>

    <!--  Category List -->
    <div
      class="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-8"
    >
      <!--  TODO: Use Real Data. The Data should from API  -->
      <CategoryCard
        v-for="i in 10"
        :key="i"
        title="Makanan"
        sub-title="Kering"
        image="https://source.unsplash.com/random/800x600"
        link="/"
      />
    </div>
  </section>
</template>
