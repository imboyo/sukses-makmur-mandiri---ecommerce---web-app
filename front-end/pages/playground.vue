<script setup lang="ts">
import VButton from "~/components/ui/button/VButton.vue";
import VModal from "~/components/ui/modal/VModal.vue";
import { ref } from "vue";
import ProductGeneralFilterForm from "~/components/domain/product/ProductGeneralFilterForm.vue";

const isOpen = ref(false);
</script>

<template>
  <VButton @click="isOpen = true">Modal</VButton>
  <VModal :is-open="isOpen" @close="isOpen = false">
    <ProductGeneralFilterForm />
  </VModal>
</template>
