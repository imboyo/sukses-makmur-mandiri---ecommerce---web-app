import axios from "axios";
import { ProductsAPIResponseType } from "~/types/products-api.type";
import { Router } from "vue-router";
import _ from "lodash";

// TODO: Get products from server
export const getProductsService = async (
  router: Router | null = null,
  page = 1,
  sort = "terbaru",
  location = "",
) => {
  if (router) {
    const queryDataObj = {
      page: page,
      sort: sort,
      location: location,
    };

    // Remove empty query params
    const queryDataObjWithoutEmpty = _.omitBy(queryDataObj, _.isEmpty);

    await router.push({
      query: queryDataObjWithoutEmpty,
    });
  }

  // Fake API Call with delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Get Products from server
  const response = await axios.get("http://localhost:7000/products");

  return response.data as ProductsAPIResponseType;
};
