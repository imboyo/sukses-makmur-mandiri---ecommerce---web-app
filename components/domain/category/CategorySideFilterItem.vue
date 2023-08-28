<script setup lang="ts">
import _ from "lodash-es";

defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="flex flex-col gap-1 justify-center">
    <p class="text-sm text-center">{{ _.capitalize(label) }}</p>
    <slot></slot>
  </div>
</template>
