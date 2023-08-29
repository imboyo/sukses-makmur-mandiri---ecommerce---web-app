<script setup lang="ts">
import LocNavigation from "~/components/local/navbar/LocNavigation.vue";
</script>

<template>
  <main>
    <LocNavigation />

    <!-- Region: Page Content  -->
    <slot />
  </main>
</template>
