import { ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { getProductsService } from "~/services/product/get-products.service";
import { useRouter } from "vue-router";

export const useProductList = (enable = true) => {
  const router = useRouter();

  const currPageState = ref(1);
  const sortByState = ref("");
  const productLocationState = ref("");
  const searchQueryState = ref("");
  const locationState = ref("");
  const minPriceState = ref<null | number>(null);
  const maxPriceState = ref<null | number>(null);

  const {
    data,
    isLoading,
    isInitialLoading,
    isError,
    isFetching,
    refetch,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ["products", currPageState, sortByState, searchQueryState],
    // TODO: Change this to your own service
    queryFn: () =>
      getProductsService(
        router,
        currPageState.value,
        sortByState.value,
        productLocationState.value,
        searchQueryState.value,
      ),
    enabled: enable,
  });

  // ! Dont ever use ...destructuring on ref
  return {
    currPageState,
    sortByState,
    productLocationState,
    searchQueryState,
    locationState,
    minPriceState,
    maxPriceState,
    data,
    isLoading,
    isInitialLoading,
    isError,
    isFetching,
    refetch,
    isSuccess,
    error,
  };
};
