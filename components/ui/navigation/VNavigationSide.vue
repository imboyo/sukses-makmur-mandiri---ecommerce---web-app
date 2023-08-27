<script lang="ts" setup>
import { useDeviceSize } from "~/composables/useDeviceSize";

interface PropsType {
  isOpen: boolean;
}

defineProps<PropsType>();

const { isTabletAndBelow } = useDeviceSize();
defineEmits(["close"]);
</script>

<template>
  <div
    v-if="isOpen && isTabletAndBelow"
    class="fixed top-0 left-0 h-screen w-screen bg-gray-900 bg-opacity-50"
    @click="$emit('close')"
  ></div>

  <transition name="slide">
    <nav
      v-show="isOpen && isTabletAndBelow"
      class="fixed top-0 left-0 h-screen w-72 bg-white shadow-xl px-4"
    >
      <slot></slot>
    </nav>
  </transition>
</template>

<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
