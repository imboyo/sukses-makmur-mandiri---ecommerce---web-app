<script setup lang="ts">
import VInputDropdown from "~/components/ui/Input/VInputDropdown.vue";
import { ref } from "vue";
import { useQuery, useQueryClient } from "@tanstack/vue-query";
import { getProductsService } from "~/services/product/get-products.service";

const categoryState = ref("");
const subCategoryState = ref("");
const subSubCategoryState = ref("");

defineEmits(["update:modelValue"]);

useQueryClient();
const { isLoading, error, data, isSuccess } = useQuery({
  queryKey: ["products", categoryState, subCategoryState, subSubCategoryState],
  queryFn: getProductsService,
});
</script>

<template>
  <section class="py-[50px]">
    <h1 class="text-xl font-semiBold">Popular Product Ranking</h1>

    <!-- Product List -->
    <div class="flex flex-col gap-2">
      <VInputDropdown
        label="Kategori"
        :items="['Item 1']"
        @update:model-value="categoryState = $event"
      />
      <VInputDropdown
        label="Sub Kategori"
        :items="[]"
        @update:model-value="subCategoryState = $event"
      />
      <VInputDropdown
        label="Sub Kategori"
        :items="[]"
        @update:model-value="subSubCategoryState = $event"
      />
    </div>

    <!-- Loading -->
    <div v-if="isLoading">Loading...</div>

    <div v-if="error">Something Went Wrong</div>

    <!-- Card List -->
    <div v-else-if="isSuccess && data">
      <div class="grid grid-cols-2 gap-4 mt-4">
        <template v-for="product in data.data" :key="product.id">
          <img :src="product.imageUrl" alt="" />
          <p>
            {{ product.name }}
          </p>
        </template>
      </div>
    </div>
  </section>
</template>
