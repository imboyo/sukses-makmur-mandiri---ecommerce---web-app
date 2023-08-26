<script lang="ts" setup>
import { computed } from "vue";
import { ComponentButtonBasePropsType } from "~/types/component-button";
import { componentButtonClassValue } from "~/utils/components/ui/component-button";

const props = defineProps<ComponentButtonBasePropsType>();

// Region: Destructive, Size, Width, Disabled, Variant

const buttonClass = computed(() => {
  const classes = [
    "flex items-center justify-center h-fit transition duration-200 active:duration-0 rounded-lg",
  ];

  // Not Destructive Button Style && Not Disabled
  if (!props.destructive && !props.disabled) {
    classes.push(
      componentButtonClassValue.destructive.false.notDisabled.button[
        props.variant || "primary"
      ],
    );

    // Destructive Button Style && Not Disabled Disabled
  } else if (props.destructive && !props.disabled) {
    classes.push(
      componentButtonClassValue.destructive.true.notDisabled.button[
        props.variant || "primary"
      ],
    );

    // Not Destructive Button Style && Disabled
  } else if (!props.destructive && props.disabled) {
    classes.push(
      componentButtonClassValue.destructive.false.disabled.button[
        props.variant || "primary"
      ],
    );

    //  Destructive Button Style && Disabled
  } else if (props.destructive && props.disabled) {
    classes.push(
      componentButtonClassValue.destructive.true.disabled.button[
        props.variant || "primary"
      ],
    );
  }

  // Size
  const sizeClassValue = {
    sm: "gap-2 px-3.5 py-2 text-sm",
    md: "gap-2 px-4 py-2.5 text-sm",
    lg: "gap-2 px-[18px] py-2.5 text-md",
    xl: "gap-2 px-5 py-3 text-md",
    "2xl": "gap-3 px-7 py-4 text-lg",
  };
  classes.push(sizeClassValue[props.size || "md"]);

  // Width
  const widthClassValue = {
    full: "w-full",
    fit: "w-fit",
  };
  classes.push(widthClassValue[props.width || "fit"]);

  return classes.join(" ");
});

const dynamicIconClassValue = {
  size: {
    sm: "h-5 w-5",
    md: "h-5 w-5",
    lg: "h-5 w-5",
    xl: "h-5 w-5",
    "2xl": "h-6 w-6",
  },
};

const iconClass = computed(() => {
  const classes = ["h-5 w-5"];

  // Size
  classes.push(dynamicIconClassValue.size[props.size || "md"]);

  return classes.join(" ");
});
</script>

<template>
  <button :class="buttonClass" :disabled="disabled">
    <!--  Prepend Icon  -->

    <template v-if="isLoading">
      <Icon name="ic:baseline-cached" class="animate-spin" />
      <span class="ml-2">Loading...</span>
    </template>

    <template v-else>
      <Icon v-if="prependIcon" :name="prependIcon" :class="iconClass"></Icon>
      <slot></slot>
      <Icon v-if="appendIcon" :name="appendIcon" :class="iconClass" />
    </template>
  </button>
</template>
