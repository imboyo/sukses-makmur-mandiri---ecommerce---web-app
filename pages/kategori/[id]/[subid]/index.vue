<script lang="ts" setup>
// Kategori/[id]/[subid]
import { useRoute } from "vue-router";
import { ref } from "vue";
import VBreadcrumb from "~/components/ui/breadcrumb/VBreadcrumb.vue";
import { ComponentBreadcrumbType } from "~/types/component-breadcrumb";

const route = useRoute();

const breadcrumb = ref<ComponentBreadcrumbType[]>([
  {
    text: "Kategori",
    href: "/kategori",
  },
  {
    text: "Single Id",
    href: `/kategori/${route.params.id}`,
  },
  {
    text: "Multiple Id",
    href: `/kategori/${route.params.id}/${route.params.subid}`,
  },
]);
</script>

<template>
  <div>
    <VBreadcrumb :items="breadcrumb" />
  </div>
</template>
