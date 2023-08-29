<script lang="ts" setup>
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();

const searchQueryState = ref("");

const handleSearch = (query: string) => {
  router.push({
    path: "/pencarian",
    query: {
      q: query
    },
  });
};

</script>


<template>
  <div class="relative flex items-center justify-end">
    <input
      placeholder="Pencarian Produk"
      class="rounded-lg border border-gray-300 placeholder:text-gray-500 text-gray-900 outline-none transition duration-300 px-3.5 py-2.5 focus:w-[500px] focus:ring-primary-300 focus:ring-2"
      @keyup.enter="() => handleSearch(searchQueryState)"
      v-model="searchQueryState"
    />
    <Icon
      name="ic:baseline-search"
      class="absolute mr-4 h-6 w-6 text-gray-500"
      alt="Search Icon"
      @click="() => handleSearch(searchQueryState)"
    />
  </div>
</template>
