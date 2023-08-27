import axios from "axios";
import { ProductsAPIResponseType } from "~/types/products-api.type";

// TODO: Get products from server
export const getProductsService = async () => {
  // Make fake API Call with delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Get Products from server
  const response = await axios.get("http://localhost:7000/products");

  return response.data as ProductsAPIResponseType;
};
