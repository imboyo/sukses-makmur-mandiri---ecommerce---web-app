<script setup lang="ts">
import { useField } from "vee-validate";
import { computed } from "vue";

interface PropsType {
  name: string;
  type?: string;
  hintMsg?: string;
  placeholder?: string;
  disabled?: boolean;
  successMsg?: string;
  label?: string;
  prependIcon?: string;
  appendIcon?: string;
}

const props = withDefaults(defineProps<PropsType>(), {
  type: "text",
  trigger: true,
  placeholder: "Placeholder",
  disabled: false,
});

// The `name` is returned in a function because we want to make sure it stays reactive
// If the name changes you want `useField` to be able to pick it up
const { value, errorMessage, meta } = useField<string | undefined>(
  () => props.name,
);

const dynamicClasses = computed(() => {
  const classes = ["border px-3.5 py-2.5 rounded-lg border-gray-300"];

  if (props.disabled) {
    classes.push("bg-gray-50");
  } else {
    classes.push(
      "focus:border-primary-300 focus:ring-4 focus:ring-primary-100 focus:outline-none",
    );
  }

  if (meta.touched) {
    if (!meta.valid) {
      classes.push("border-error-500 focus:ring-error-300");
    }
  }

  if (props.prependIcon) {
    classes.push("pl-10");
  }

  return classes.join(" ");
});

defineEmits(["update:modelValue", "prepend-icon-click", "append-icon-click"]);
</script>

<template>
  <div class="flex flex-col text-sm gap-1.5">
    <label class="relative text-gray-700">
      <template v-if="label">{{ label }}</template>
      <!-- Region: Prepend Icon -->
      <Icon
        v-if="prependIcon"
        :name="prependIcon"
        class="absolute left-4 h-5 w-5 text-gray-500 top-3.5"
        @click="$emit('prepend-icon-click')"
      />
      <!--  End: Prepend Icon-->

      <input
        v-model="value"
        :type="type || 'text'"
        :class="dynamicClasses"
        :placeholder="placeholder"
        :disabled="disabled"
        class="w-full text-md"
        @input="$emit('update:modelValue', value)"
        v-bind="$attrs"
      />

      <!--   Region: Append Icon Block   -->
      <!-- Error Icon -->
      <Icon
        v-if="meta.touched && !meta.valid"
        name="fa-solid:exclamation-circle"
        class="absolute right-4 top-3.5 text-error-500"
      />

      <!--  Append Icon    -->
      <Icon
        v-else-if="appendIcon && meta.valid"
        :name="appendIcon"
        class="absolute top-3 right-4 h-5 w-5 text-gray-500"
        @click="$emit('append-icon-click')"
      />
      <!-- End: End Append Icon Block -->
    </label>

    <!-- Region: Message -->
    <p class="text-gray-500" v-if="hintMsg">{{ hintMsg }}</p>
    <p class="text-error-500" v-if="!meta.valid">
      {{ errorMessage }}
    </p>
    <p class="text-success-500" v-if="meta.valid && value">
      {{ successMsg }}
    </p>
    <!-- End: Message -->
  </div>
</template>
