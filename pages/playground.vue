<script setup lang="ts">
import { useQuery } from "@tanstack/vue-query";
import { getChoosenCategoriesService } from "~/services/category/get-choosen-categories.service";

const { data, isSuccess, isLoading, error } = useQuery({
  queryKey: ["choosen-category"],
  queryFn: getChoosenCategoriesService,
});
</script>

<template>
  <div class="mt-4 flex flex-col gap-8 px-4 py-20">
    <template v-if="data && isSuccess">
      <pre>{{ data }}</pre>
    </template>
  </div>
</template>
