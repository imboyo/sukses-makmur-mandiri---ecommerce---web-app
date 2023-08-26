<script setup lang="ts">
import NavigationTop from "~/components/ui/navigation/NavigationTop.vue";
</script>

<template>
  <main>
    <NavigationTop />

    <!-- Region: Page Content  -->
    <slot />
  </main>
</template>
