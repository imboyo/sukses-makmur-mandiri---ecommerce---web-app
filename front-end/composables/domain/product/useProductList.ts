import { ref } from "vue";

export const useProductList = () => {
  const currPageState = ref(1);
  const sortByState = ref("");
  const productLocationState = ref("");
  const searchQueryState = ref("");
  const locationState = ref("");
  const minPriceState = ref<null | number>(null);
  const maxPriceState = ref<null | number>(null);

  // ! Dont ever use ...destructuring on ref
  return {
    currPageState,
    sortByState,
    productLocationState,
    searchQueryState,
    locationState,
    minPriceState,
    maxPriceState,
  };
};
