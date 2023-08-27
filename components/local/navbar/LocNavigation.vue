<script setup lang="ts">
import VNavigationTop from "~/components/ui/navigation/VNavigationTop.vue";
import VNavigationMenuButton from "~/components/ui/navigation/VNavigationMenuButton.vue";
import VNavigationSide from "~/components/ui/navigation/VNavigationSide.vue";

import { ref } from "vue";
import VNavigationMenuItem from "~/components/ui/navigation/VNavigationMenuItem.vue";
import VButton from "~/components/ui/button/VButton.vue";
import LNavigationInputSearch from "~/components/local/navbar/LNavigationInputSearch.vue";

const isOpenState = ref(false);
</script>

<template>
  <!-- Region: Navigation Top -->
  <VNavigationTop>
    <!--   Sideleft -->
    <div class="flex flex-row items-center">
      <!--  TODO: Use Real Logo/Title Later  -->
      <h1 class="text-2xl font-bold">Logo</h1>

      <!--   Link List   -->
      <div class="ml-6 flex flex-row">
        <NuxtLink to="/">
          <VButton variant="link-gray">Beranda</VButton>
        </NuxtLink>
        <NuxtLink to="/kategori">
          <VButton variant="link-gray">Kategori</VButton>
        </NuxtLink>
      </div>
    </div>

    <!--  Region: Right Side  -->
    <!--  Only in Mobile  -->
    <VNavigationMenuButton
      @click="isOpenState = !isOpenState"
      :is-open="isOpenState"
      class="lg:hidden"
    />

    <!--  Only in Desktop  -->
    <div class="hidden flex-row gap-4 lg:flex">
      <LNavigationInputSearch />
    </div>
  </VNavigationTop>

  <!-- Region: Navigation Side -->
  <VNavigationSide :is-open="isOpenState" @close="isOpenState = false">
    <!--  Sidenav Content    -->
    <div class="flex h-full flex-col">
      <!--  Logo -->
      <div class="flex flex-row items-center p-4">
        <!-- TODO: Use Real Logo/Title Later -->
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
