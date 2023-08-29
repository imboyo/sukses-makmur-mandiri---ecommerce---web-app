<script setup lang="ts">
import _ from "lodash-es";

defineProps<{
  label: string;
}>();
</script>

<template>
  <div class="flex flex-col justify-center gap-1">
    <p class="text-center text-sm">{{ _.capitalize(label) }}</p>
    <slot></slot>
  </div>
</template>
