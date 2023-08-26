<script lang="ts" setup>
import { computed } from "vue";

interface PropsType {
  isOpen: boolean;
}

const props = defineProps<PropsType>();

const iconProperty = computed(() => {
  const property = {
    name: "",
    className: "",
  };

  if (!props.isOpen) {
    property.name = "ic:baseline-menu";
    property.className = "rotate-0";
  } else {
    property.name = "ic:baseline-close";
    property.className = "rotate-180";
  }

  return property;
});

const buttonProperty = computed(() => {
  const property = {
    className: "",
  };

  if (!props.isOpen) {
    // The active is only when the menu is not open/in default state
    property.className = "active:shadow-focus-ring-primary active:duration-0";
  } else {
    // Dont't need to add active class when the menu is open
    property.className = "";
  }

  return property;
});


defineEmits(["click"]);
</script>

<template>
  <button
    class="rounded-lg p-2 transition duration-500 ease-in-out hover:bg-gray-50"
    :class="buttonProperty.className"
    @click="$emit('click')"
  >
    <Icon
      :name="iconProperty.name"
      class="h-6 w-6 text-gray-700 transition duration-500 ease-in-out"
      :class="iconProperty.className"
    ></Icon>
  </button>
</template>
