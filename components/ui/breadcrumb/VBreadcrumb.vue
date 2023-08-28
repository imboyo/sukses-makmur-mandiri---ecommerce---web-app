<script lang="ts" setup>
defineProps<{
  items: {
    text: string;
    href: string;
  }[];
}>();
</script>

<template>
  <div class="flex items-center space-x-2">
    <NuxtLink href="/" class="text-gray-400 hover:text-gray-500">
      <Icon name="mdi:home" class="w-5 h-5" />
    </NuxtLink>
    <span class="text-gray-400">/</span>

    <template v-for="(item, index) in items" :key="index">
      <NuxtLink :to="item.href" class="text-gray-400 hover:text-gray-500">{{
        item.text
      }}</NuxtLink>
      <span v-if="index < items.length - 1" class="text-gray-400">/</span>
    </template>
  </div>
</template>
