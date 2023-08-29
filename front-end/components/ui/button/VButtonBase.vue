<script lang="ts" setup>
import {computed} from "vue";
import {ComponentButtonBasePropsType, ComponentButtonSizes, ComponentButtonVariants} from "~/types/component-button";

interface PropsType {
  prependIcon?: string;
  appendIcon?: string;
  size?: ComponentButtonSizes;
  variant?: ComponentButtonVariants;
  destructive?: boolean;
  width?: "full" | "fit";
  disabled?: boolean;
  isLoading?: boolean;
  iconOnly?: string;
}

const props = defineProps<PropsType>();

const isNotDestructive = {
  notDisabled: {
    primary:
      "bg-primary-600 text-white " +
      "hover:bg-primary-700 " +
      "active:border-4 active:border-primary-100",
    secondary:
      "bg-primary-50 text-primary-700 " +
      "hover:bg-primary-100 " +
      "active:border-4 active:border-primary-100 active:bg-primary-50",
    "secondary-gray":
      "bg-white text-gray-700 border border-gray-300 " +
      "hover:bg-gray-50 hover:text-gray-800 " +
      "active:border-4 active:border-gray-300 active:bg-gray-50",
    tertiary:
      "bg-transparent text-primary-700 " +
      "hover:bg-primary-50 " +
      "active:bg-transparent",
    // ? I'm Here
    "tertiary-gray":
      "text-gray-500 " +
      "hover:bg-gray-50 hover:text-gray-600 " +
      "active:bg-transparent",
    link:
      "text-primary-700 " +
      "hover:text-primary-800 " +
      "active:text-primary-700 ",
    "link-gray":
      "text-gray-500" + "hover:text-gray-600 " + "active:text-gray-500",
  },
  disabled: {
    primary: "bg-primary-200 text-white",
    secondary: "bg-primary-25 text-primary-300",
    "secondary-gray": "bg-white text-gray-300 border border-gray-200",
    tertiary: "text-gray-300",
    "tertiary-gray": "text-gray-300",
    link: "text-gray-300",
    "link-gray": "text-gray-300",
  },
}
const isDestructive = {
  notDisabled: {
    primary:
      "bg-error-600 text-white " +
      "hover:bg-error-700 active:border-4 " +
      "active:border-error-100",
    secondary:
      "bg-error-50 text-error-700 " +
      "hover:bg-error-100 " +
      "active:border-4 active:border-error-100 active:bg-error-50",
    "secondary-gray":
      "bg-white text-error-700 border border-error-300 " +
      "hover:bg-error-50 hover:text-error-800 " +
      "active:border-4 active:border-error-50 active:bg-white",
    tertiary: "text-error-700 hover:bg-error-50 active:bg-white",
    "tertiary-gray":
      "text-error-700 hover:bg-error-50 hover:text-error-800 active:text-error-700",
    link: "text-error-700 hover:text-error-800 active:text-error-700",
    "link-gray":
      "text-error-700 hover:text-error-800 active:text-error-700",
  },
  disabled: {
    primary: "bg-error-200 text-white",
    secondary: "bg-error-25 text-error-300",
    "secondary-gray": "bg-white text-error-300 border border-error-200",
    tertiary: "text-error-300",
    "tertiary-gray": "text-error-300",
    link: "text-error-300",
    "link-gray": "text-error-300",
  }
}


// Region: Control Dynamic Style for - General
const buttonClass = computed(() => {
  const classes = [
    "flex items-center justify-center h-fit transition duration-200 active:duration-0",
  ];

  // * Variant Style
  // Not Destructive Button Style && Not Disabled
  if (!props.destructive && !props.disabled) {
    classes.push(isNotDestructive.notDisabled[props.variant || "primary"]);

    // Not Destructive Button Style && Disabled
  } else if (!props.destructive && props.disabled) {
    classes.push(isNotDestructive.disabled[props.variant || "primary"]);

    // Destructive Button Style && Not Disabled
  } else if (props.destructive && !props.disabled) {
    classes.push(isDestructive.notDisabled[props.variant || "primary"]);

    // Destructive Button Style && Disabled
  } else if (props.destructive && props.disabled) {
    classes.push(isDestructive.disabled[props.variant || "primary"]);
  }

  // * Width
  const widthClassValue = {
    full: "w-full",
    fit: "w-fit",
  };
  classes.push(widthClassValue[props.width || "fit"]);

  // Region: Icon Props Control
  // * Size
  const sizeClassValue = {
    default: {
      sm: "gap-2 px-3.5 py-2 text-sm",
      md: "gap-2 px-4 py-2.5 text-sm",
      lg: "gap-2 px-[18px] py-2.5 text-md",
      xl: "gap-2 px-5 py-3 text-md",
      "2xl": "gap-3 px-7 py-4 text-lg",
    },
    icon: {
      sm: "gap-2 p-2",
      md: "gap-2 p-2",
      lg: "gap-2 p-2",
      xl: "gap-2 p-2",
      "2xl": "gap-3 p-3",
    }
  };

  if (props.iconOnly) {
    classes.push(sizeClassValue.icon[props.size || "md"]);
    classes.push("rounded-full")
  } else {
    classes.push(sizeClassValue.default[props.size || "md"]);
    classes.push("rounded-md")
  }

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
      <Icon name="ic:baseline-cached" class="animate-spin" :class="iconClass"/>
    </template>

    <template v-else>
      <template v-if="iconOnly">
        <Icon :name="iconOnly" :class="iconClass"/>
      </template>

      <template v-else>
        <Icon v-if="prependIcon" :name="prependIcon" :class="iconClass"></Icon>
        <slot></slot>
        <Icon v-if="appendIcon" :name="appendIcon" :class="iconClass"/>
      </template>
    </template>
  </button>
</template>

<style lang="scss" scoped>
.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
