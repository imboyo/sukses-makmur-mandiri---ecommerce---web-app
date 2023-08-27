<script setup lang="ts">
import { ref } from "vue";
import VInputDropdown from "~/components/ui/Input/VInputDropdown.vue";
import Private__VInputDropdownMenuItem from "~/components/ui/Input/_VInputDropdownMenuItem.vue";

const items = ref(["Item 1", "Item 2", "Item 3"]);
</script>

<template>
  <div class="mt-4 flex flex-col gap-8 px-4 py-20">
    <div class="w-[400px]">
      <VInputDropdown :items="items" label="Kategori">
        <template #default="{ item }">
          <Private__VInputDropdownMenuItem
            >{{ item }}
          </Private__VInputDropdownMenuItem>
        </template>
      </VInputDropdown>
    </div>
  </div>
</template>
