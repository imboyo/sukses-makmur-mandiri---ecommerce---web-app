<script lang="ts" setup>
interface PropsType {
  icon: string;
  label: string;
  linkTo?: string;
}

defineProps<PropsType>();
</script>

<template>
  <NuxtLink :to="linkTo">
    <div class="flex cursor-pointer flex-row gap-4 px-4 py-3 align-middle transition duration-300 hover:bg-gray-50">
      <Icon
        :name="icon"
        class="h-6 w-6 transition duration-500 ease-in-out text-primary-600"
      ></Icon>
      <h3 class="font-medium text-gray-900 text-md">{{ label }}</h3>
    </div>
  </NuxtLink>
</template>