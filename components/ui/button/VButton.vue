<script lang="ts" setup>
import VButtonBase from "~/components/ui/button/VButtonBase.vue";
import VButtonIcon from "~/components/ui/button/VButtonIcon.vue";
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

  <VButtonIcon
    v-else
    :icon="icon"
    :size="size"
    :variant="variant"
    :destructive="destructive"
    :disabled="disabled"
    :is-loading="isLoading"
  />
</template>
