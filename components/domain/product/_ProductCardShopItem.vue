<script lang="ts" setup>
defineProps<{
  icon: string;
}>();
</script>

<template>
  <div class="flex flex-row gap-2">
    <Icon :name="icon" class="w-4 h-4" />
    <p class="text-xs text-gray-700">
      <slot></slot>
    </p>
  </div>
</template>
