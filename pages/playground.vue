<script setup lang="ts">
import VTextInput from "~/components/ui/Input/VTextInput.vue";
import * as yup from "yup";
import { useForm } from "vee-validate";
import VButton from "~/components/ui/button/VButton.vue";

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  }),
});

const onsubmit = handleSubmit((values) => {
  console.log(values);
  alert("Submitted");
});
</script>

<template>
  <form @submit="onsubmit" class="mt-10 flex flex-col gap-4 px-12">
    <VTextInput
      name="email"
      type="email"
      success-msg="Good Email"
      prepend-icon="mdi:email"
      append-icon="mdi:search"
    />
    <VTextInput name="password" type="password" />
    <VButton type="submit">Submit</VButton>
  </form>
</template>
