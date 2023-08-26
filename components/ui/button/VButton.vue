<script lang="ts" setup>
import { computed } from "vue";

interface PropsType {
  prependIcon?: string;
  appendIcon?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  variant?:
    | "primary"
    | "secondary"
    | "secondary-gray"
    | "tertiary"
    | "tertiary-gray"
    | "link"
    | "link-gray";
  destructive?: boolean;
  width?: "full" | "fit";
  disabled?: boolean;
}

const props = defineProps<PropsType>();

// Region: Destructive, Size, Width, Disabled, Variant
const dynamicButtonClassValue = {
  destructive: {
    // * !!Destructive Styles
    true: {
      // * Not Disabled
      notDisabled: {
        button: {
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
      },

      // * !!Disabled
      disabled: {
        button: {
          primary: "bg-error-200 text-white",
          secondary: "bg-error-25 text-error-300",
          "secondary-gray": "bg-white text-error-300 border border-error-200",
          tertiary: "text-error-300",
          "tertiary-gray": "text-error-300",
          link: "text-error-300",
          "link-gray": "text-error-300",
        },
      },
    },

    // * Non Destructive Styles
    false: {
      // * Not Disabled
      notDisabled: {
        button: {
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
      },

      // * !!Disabled
      disabled: {
        button: {
          primary: "bg-primary-200 text-white",
          secondary: "bg-primary-25 text-primary-300",
          "secondary-gray": "bg-white text-gray-300 border border-gray-200",
          tertiary: "text-gray-300",
          "tertiary-gray": "text-gray-300",
          link: "text-gray-300",
          "link-gray": "text-gray-300",
        },
      },
    },
  },
  size: {
    sm: "gap-2 px-3.5 py-2 text-sm",
    md: "gap-2 px-4 py-2.5 text-sm",
    lg: "gap-2 px-[18px] py-2.5 text-md",
    xl: "gap-2 px-5 py-3 text-md",
    "2xl": "gap-3 px-7 py-4 text-lg",
  },
  width: {
    full: "w-full",
    fit: "w-fit",
  },
};

const buttonClass = computed(() => {
  const classes = [
    "flex items-center justify-center rounded-xl h-fit transition duration-200 active:duration-0",
  ];

  // Not Destructive Button Style && Not Disabled
  if (!props.destructive && !props.disabled) {
    classes.push(
      dynamicButtonClassValue.destructive.false.notDisabled.button[
        props.variant || "primary"
      ],
    );

    // Destructive Button Style && Not Disabled Disabled
  } else if (props.destructive && !props.disabled) {
    classes.push(
      dynamicButtonClassValue.destructive.true.notDisabled.button[
        props.variant || "primary"
      ],
    );

    // Not Destructive Button Style && Disabled
  } else if (!props.destructive && props.disabled) {
    classes.push(
      dynamicButtonClassValue.destructive.false.disabled.button[
        props.variant || "primary"
      ],
    );

    //  Destructive Button Style && Disabled
  } else if (props.destructive && props.disabled) {
    classes.push(
      dynamicButtonClassValue.destructive.true.disabled.button[
        props.variant || "primary"
      ],
    );
  }

  // Size
  classes.push(dynamicButtonClassValue.size[props.size || "md"]);

  // Width
  classes.push(dynamicButtonClassValue.width[props.width || "fit"]);

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
}

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
    <Icon v-if="prependIcon" :name="prependIcon" :class="iconClass"></Icon>

    <!--  Button Text  -->
    <slot></slot>

    <!--  Append Icon  -->
    <Icon v-if="appendIcon" :name="appendIcon" :class="iconClass" />
  </button>
</template>
