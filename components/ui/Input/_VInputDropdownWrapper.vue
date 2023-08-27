<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  isOpen: boolean;
}>();

const dynamicClass = computed(() => {
  const classes = [
    "flex flex-row px-3.5 py-2.5 border border-gray-300 cursor-pointer rounded-lg gap-2 items-center border-gray-300 transition duration-200 ease-in-out justify-between",
  ];

  // Focus state style
  if (props.isOpen) {
    classes.push("ring-2 ring-primary-300");
  }

  return classes.join(" ");
});

defineEmits(["click"]);
</script>

<template>
  <div @click="$emit('click')" :class="dynamicClass">
    <div class="flex flex-row gap-2">
      <slot></slot>
    </div>

    <!-- Dropdown Icon -->
    <Icon
      :name="props.isOpen ? 'teenyicons:up-solid' : 'teenyicons:down-solid'"
      class="w-4 h-4 text-gray-500"
    />
  </div>
</template>

<style scoped lang="scss">
.icon-transition-enter-active,
.icon-transition-leave-active {
  transition: all 200ms ease-in-out;
}

.icon-transition-enter-from,
.icon-transition-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
