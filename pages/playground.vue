<script setup lang="ts">
import VButton from "~/components/ui/button/VButton.vue";
</script>

<template>
  <div class="mt-4 flex flex-col gap-8 px-4 py-20">
    <div class="flex flex-row gap-2">
      <VButton destructive>Button</VButton>
      <VButton
        destructive
        variant="primary"
        prepend-icon="ic:baseline-menu"
        append-icon="ic:baseline-home"
        >Button
      </VButton>
      <VButton destructive variant="secondary">Button</VButton>
      <VButton destructive variant="secondary-gray">Button</VButton>
      <VButton destructive variant="tertiary">Button</VButton>
      <VButton destructive variant="tertiary-gray">Button</VButton>
      <VButton destructive variant="link">Button</VButton>
      <VButton destructive variant="link-gray">Button</VButton>
    </div>

    <div class="flex flex-row gap-2">
      <VButton destructive disabled>Button</VButton>
      <VButton destructive disabled variant="primary">Button</VButton>
      <VButton destructive disabled variant="secondary">Button</VButton>
      <VButton destructive disabled variant="secondary-gray">Button</VButton>
      <VButton destructive disabled variant="tertiary">Button</VButton>
      <VButton destructive disabled variant="tertiary-gray">Button</VButton>
      <VButton destructive disabled variant="link">Button</VButton>
      <VButton destructive disabled variant="link-gray">Button</VButton>
    </div>

    <div class="flex flex-row gap-2">
      <VButton size="sm">Button</VButton>
      <VButton size="md">Button</VButton>
      <VButton size="lg">Button</VButton>
      <VButton size="xl">Button</VButton>
      <VButton size="2xl">Button</VButton>
    </div>

    <div class="flex flex-row gap-2">
      <VButton variant="secondary">Button</VButton>
      <VButton variant="secondary-gray" size="sm">Button</VButton>
      <VButton variant="tertiary" size="sm">Button</VButton>
      <VButton variant="tertiary-gray" size="sm">Button</VButton>
      <VButton variant="link" size="sm">Button</VButton>
      <VButton variant="link-gray" size="sm">Button</VButton>
    </div>

    <div class="flex flex-row gap-2">
      <VButton width="full">Button</VButton>
      <VButton width="fit">Button</VButton>
    </div>

    <div class="flex flex-row gap-2">
      <VButton icon="ic:baseline-menu">Button</VButton>
      <VButton disabled variant="primary">Button</VButton>
      <VButton disabled variant="secondary">Button</VButton>
      <VButton disabled variant="secondary-gray">Button</VButton>
      <VButton disabled variant="tertiary">Button</VButton>
      <VButton disabled variant="tertiary-gray">Button</VButton>
      <VButton disabled variant="link">Button</VButton>
      <VButton disabled variant="link-gray">Button</VButton>
    </div>

    <div>
      <VButton destructive variant="secondary" icon="ic:baseline-menu" size="md"></VButton>
    </div>
  </div>
</template>
