<script setup lang="ts">
import {ref} from "vue";
import VInputDropdown from "~/components/ui/Input/VInputDropdown.vue";
import VButton from "~/components/ui/button/VButton.vue";

const items = ref(["Item 1", "Item 2", "Item 3"]);
</script>

<template>
  <div class="mt-4 flex flex-col gap-8 px-4 py-20">
    <div class="w-[400px]">
      <VInputDropdown :items="items" label="Kategori" />
    </div>

    <VButton variant="secondary" disabled>Test</VButton>
    <VButton variant="primary">Test</VButton>

    <VButton icon-only="mdi:menu"></VButton>
    <VButton icon-only="mdi:menu"></VButton>
    <VButton icon-only="mdi:menu"></VButton>
  </div>
</template>
