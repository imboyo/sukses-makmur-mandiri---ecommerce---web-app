<script setup lang="ts">
import LocNavigation from "~/components/local/navbar/LocNavigation.vue";
</script>

<template>
  <main>
    <LocNavigation />

    <div>
      <slot></slot>
    </div>
  </main>
</template>
