import { ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { getProductsService } from "~/services/product/get-products.service";
import { useRouter } from "vue-router";

export const useProductList = () => {
  const router = useRouter();

  const currPageState = ref(1);
  const sortByState = ref("Terbaru");
  const productLocationState = ref("");
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["products", currPageState, sortByState],
    // TODO: Change this to your own service
    queryFn: () =>
      getProductsService(
        router,
        currPageState.value,
        sortByState.value,
        productLocationState.value,
      ),
  });

  return {
    currPageState,
    sortByState,
    productLocationState,
    isLoading,
    error,
    data,
    refetch,
  };
};
