<script lang="ts" setup>
import {
  ComponentButtonSizes,
  ComponentButtonVariants,
} from "~/types/component-button";
import { componentButtonClassValue } from "~/utils/components/ui/component-button";
import { computed } from "vue";

interface PropsType {
  icon: string;
  variants?: ComponentButtonVariants;
  size?: ComponentButtonSizes;
  destructive?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
}

const props = defineProps<PropsType>();

const buttonClass = computed(() => {
  const classes = [
    "flex items-center justify-center h-fit transition duration-200 active:duration-0 rounded-full",
  ];

  // Not Destructive Button Style && Not Disabled
  if (!props.destructive && !props.disabled) {
    classes.push(
      componentButtonClassValue.destructive.false.notDisabled.button[
        props.variants || "primary"
      ],
    );

    // Destructive Button Style && Not Disabled Disabled
  } else if (props.destructive && !props.disabled) {
    classes.push(
      componentButtonClassValue.destructive.true.notDisabled.button[
        props.variants || "primary"
      ],
    );

    // Not Destructive Button Style && Disabled
  } else if (!props.destructive && props.disabled) {
    classes.push(
      componentButtonClassValue.destructive.false.disabled.button[
        props.variants || "primary"
      ],
    );

    //  Destructive Button Style && Disabled
  } else if (props.destructive && props.disabled) {
    classes.push(
      componentButtonClassValue.destructive.true.disabled.button[
        props.variants || "primary"
      ],
    );
  }

  // Size
  // Padding
  const sizeClassValue = {
    sm: "p-2",
    md: "p-2.5",
    lg: "p-3",
    xl: "p-3.5",
    "2xl": "p-4",
  };

  classes.push(sizeClassValue[props.size || "md"]);

  return classes.join(" ");
});

const iconClass = computed(() => {
  const sizeClassValue = {
    sm: "w-2 h-2",
    md: "w-2.5 h-2.5",
    lg: "w-3 h-3",
    xl: "w-3.5 h-3.5",
    "2xl": "w-4 h-4",
  }

  return sizeClassValue[props.size || "md"];
})
</script>

<template>
  <button :class="buttonClass">
    <Icon :name="icon" :class="iconClass"></Icon>
  </button>
</template>
