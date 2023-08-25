<script setup lang="ts">
import TopNavigation from "~/components/ui/navigation/TopNavigation.vue";
</script>

<template>
  <main>
    <TopNavigation />

    <!-- Region: Page Content  -->
    <slot />
  </main>
</template>
