<script lang="ts" setup>
import {computed, ref, watch} from "vue";
import VButton from "~/components/ui/button/VButton.vue";

const props = defineProps<{
  totalPage: number;
  currentPage: number;
}>();

const emit = defineEmits(["update:modelValue"]);

const modelValue = ref(props.currentPage);

// Function to emit the updated page when the modelValue changes
watch(modelValue, () => {
  emit("update:modelValue", modelValue.value);
});

// Calculate the range of visible pages around the current page
const visiblePageRange = computed(() => {
  const range = 2;
  const min = Math.max(1, modelValue.value - range);
  const max = Math.min(props.totalPage, modelValue.value + range);
  const isPreviousTruncated = min > 1;
  const isNextTruncated = max < props.totalPage;
  const isPreviousPage = modelValue.value > 1;
  const isNextPage = modelValue.value < props.totalPage;

  return {
    pages: Array.from({length: max - min + 1}, (_, i) => min + i),
    isPreviousTruncated,
    isNextTruncated,
    isPreviousPage,
    isNextPage,
  };
});
</script>

<template>
  <div class="flex justify-center mt-4 gap-2 items-center">
    <VButton
      v-if="visiblePageRange.isPreviousTruncated"
      icon-only="ic:baseline-navigate-before"
      variant="secondary"
      @click="modelValue = modelValue - 1;"/>

    <p v-if="visiblePageRange.isPreviousTruncated">...</p>
    <template v-for="page in visiblePageRange.pages" :key="page">
      <VButton variant="secondary" @click="modelValue = page"
      >{{ page }}
      </VButton>
    </template>
    <p v-if="visiblePageRange.isNextTruncated">...</p>

    <VButton
      v-if="visiblePageRange.isNextTruncated"
      icon-only="ic:baseline-navigate-next"
      variant="secondary"
      @click="modelValue = modelValue + 1;"/>
  </div>
</template>

<style scoped></style>
