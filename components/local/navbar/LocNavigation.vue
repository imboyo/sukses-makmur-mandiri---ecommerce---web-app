<script setup lang="ts">
import VNavigationTop from "~/components/ui/navigation/VNavigationTop.vue";
import VNavigationMenuButton from "~/components/ui/navigation/VNavigationMenuButton.vue";
import VNavigationSide from "~/components/ui/navigation/VNavigationSide.vue";

import { ref } from "vue";
import VNavigationMenuItem from "~/components/ui/navigation/VNavigationMenuItem.vue";

const isOpenState = ref(true);
</script>

<template>
  <VNavigationTop>
    <!--  TODO: Use Real Logo/Title Later  -->
    <div>
      <h1 class="text-2xl font-bold">Logo</h1>
    </div>

    <VNavigationMenuButton
      @click="isOpenState = !isOpenState"
      :is-open="isOpenState"
      class="lg:hidden"
    />
  </VNavigationTop>
  <VNavigationSide :is-open="isOpenState" @close="isOpenState = false" >
    <!--  Sidenav Content    -->
    <div class="flex h-full flex-col">
      <!--  Logo -->
      <div class="flex flex-row items-center p-4">
        <!--      Use Logo    -->
        <h1 class="text-2xl font-bold">Logo</h1>
      </div>

      <!--  Nav Items  -->
      <div class="flex flex-col gap-2">
        <VNavigationMenuItem
          icon="ic:baseline-menu"
          label="Beranda"
          link-to="/"
        />
        <VNavigationMenuItem
          icon="ic:baseline-category"
          label="Kategori"
          link-to="/kategori"
        />
      </div>
    </div>
  </VNavigationSide>
</template>
