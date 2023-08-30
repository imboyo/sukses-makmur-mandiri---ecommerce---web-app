<script setup lang="ts">
import _ from "lodash-es";

defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="flex flex-col justify-center gap-2">
    <p class="text-center text-sm font-bold">{{ _.capitalize(label) }}</p>
    <slot></slot>
  </div>
</template>
