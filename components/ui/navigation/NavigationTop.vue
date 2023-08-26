<script lang="ts" setup>
import NavigationMenuButton from "~/components/ui/navigation/NavigationMenuButton.vue";
import NavigationSide from "~/components/ui/navigation/NavigationSide.vue";
import { ref } from "vue";

const isOpenState = ref(false);
</script>

<template>
  <NavigationSide :is-open="isOpenState" @close="isOpenState = false" />
  <nav
    class="flex flex-row p-4 items-center justify-between shadow-md bg-white"
  >
    <!--  TODO: Use Real Logo/Title Later  -->
    <div>
      <h1 class="text-2xl font-bold">Logo</h1>
    </div>

    <NavigationMenuButton
      @click="isOpenState = !isOpenState"
      :is-open="isOpenState"
    />
  </nav>
</template>
