<script lang="ts" setup>
import VButtonBase from "~/components/ui/button/VButtonBase.vue";
import {
  ComponentButtonSizes,
  ComponentButtonVariants,
} from "~/types/component-button";

interface PropsType {
  prependIcon?: string;
  appendIcon?: string;
  size?: ComponentButtonSizes;
  variant?: ComponentButtonVariants;
  destructive?: boolean;
  width?: "full" | "fit";
  disabled?: boolean;
  isLoading?: boolean;
  icon?: string;
}

defineProps<PropsType>();
</script>

<template>
  <VButtonBase
    v-if="!icon"
    :prepend-icon="prependIcon"
    :append-icon="appendIcon"
    :size="size"
    :variant="variant"
    :destructive="destructive"
    :width="width"
    :disabled="disabled"
    :is-loading="isLoading"
  >
    <slot></slot>
  </VButtonBase>
</template>
