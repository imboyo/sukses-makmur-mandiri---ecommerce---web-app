<script lang="ts" setup>
interface PropsType {
  title: string;
  image?: string;
  link: string;
}

defineProps<PropsType>();
</script>

<template>
  <NuxtLink
    :to="link"
    class="flex flex-col items-center gap-3 rounded-xl border border-gray-200 p-4"
  >
    <!--  Image -->
    <div v-if="image" class="overflow-hidden rounded-xl w-[50px] h-[50px]">
      <lazy-nuxt-img
        loading="lazy"
        :src="image"
        :alt="image"
        class="h-full w-full object-cover"
      />
    </div>

    <!-- Description -->
    <div class="flex flex-col text-center">
      <h3 class="text-sm font-semiBold">{{ title }}</h3>
    </div>
  </NuxtLink>
</template>
