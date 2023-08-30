<script setup lang="ts">
import VTextInput from "~/components/ui/Input/VTextInput.vue";
import CategorySideFilterItem from "~/components/domain/category/CategorySideFilterItem.vue";
import {ref} from "vue";
import VInputDropdown from "~/components/ui/Input/VInputDropdown.vue";

const emit = defineEmits([
  "update:locationState",
  "update:minPriceState",
  "update:maxPriceState",
  "update:sortByState",
  "enter:location",
  "enter:minPrice",
  "enter:maxPrice",
  "submit",
]);

const locationState = ref("");
const minPriceState = ref("");
const maxPriceState = ref("");
const sortByState = ref("Terbaru");

const handleKeyupEnter = (e: KeyboardEvent) => {
  if (e.key === "Enter") {
    emit("submit", {
      location: locationState.value,
      minPrice: minPriceState.value,
      maxPrice: maxPriceState.value,
      sortBy: sortByState.value,
    });
  }
};
</script>

<template>
  <form  @keyup.enter="handleKeyupEnter" class="flex flex-col gap-4">
    <CategorySideFilterItem label="Urutkan">
      <VInputDropdown
        label="Urut Berdasarkan"
        :items="['Terbaru', 'Harga']"
        v-model="sortByState"
        @update:model-value="$emit('update:sortByState', $event)"
      />
    </CategorySideFilterItem>

    <CategorySideFilterItem label="Lokasi">
      <VTextInput
        v-model="locationState"
        name="Lokasi"
        placeholder="Lokasi"
        prepend-icon="mdi:location"
      />
    </CategorySideFilterItem>

    <CategorySideFilterItem label="Harga">
      <VTextInput
        v-model="minPriceState"
        name="min-price"
        placeholder="Harga Minimum"
        prepend-icon="fa6-solid:rupiah-sign"
        type="number"
      />
      <VTextInput
        v-model="maxPriceState"
        name="max-price"
        placeholder="Harga Maksimum"
        prepend-icon="fa6-solid:rupiah-sign"
        type="number"
      />
    </CategorySideFilterItem>
  </form>
</template>
