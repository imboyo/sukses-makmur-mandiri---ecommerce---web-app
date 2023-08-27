<script lang="ts" setup>
import VInputDropdownWrapper__Private from "~/components/ui/Input/_VInputDropdownWrapper.vue";
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import VInputDropdownMenuItem__Private from "~/components/ui/Input/_VInputDropdownMenuItem.vue";

type ItemType = string | number | boolean | object;
defineProps<{
  label: string;
  items: ItemType[];
  prependIcon?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const isOpen = ref(false);
const dropdownRef = ref(null);
const choosenItem = ref<ItemType | null>(null);

onClickOutside(dropdownRef, () => {
  isOpen.value = false;
});

const handleSelectInputClick = () => {
  isOpen.value = !isOpen.value;
};

const handleSelectItem = (item: ItemType) => {
  choosenItem.value = item;
  isOpen.value = false;
  emit("update:modelValue", item);
};
</script>

<template>
  <div ref="dropdownRef">
    <VInputDropdownWrapper__Private
      @click="handleSelectInputClick"
      :is-open="isOpen"
    >
      <!-- Icon -->
      <Icon
        v-if="prependIcon"
        :name="prependIcon"
        class="w-4 h-4 text-gray-500"
      />

      <!-- Placeholder and Filled State -->
      <p v-if="!choosenItem" class="text-gray-500">{{ label }}</p>
      <p v-else class="text-gray-900">{{ choosenItem }}</p>
    </VInputDropdownWrapper__Private>

    <!-- Dropdown -->
    <Transition name="options-transition">
      <div v-if="isOpen && items.length > 0">
        <div
          v-for="item in items"
          :key="item"
          @click="() => handleSelectItem(item)"
          class="cursor-pointer"
        >
          <VInputDropdownMenuItem__Private>{{ item }}</VInputDropdownMenuItem__Private>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.options-transition-enter-active,
.options-transition-leave-active {
  transition: all 200ms ease-in-out;
}

.options-transition-enter-from,
.options-transition-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
