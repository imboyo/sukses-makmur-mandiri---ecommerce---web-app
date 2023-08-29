import { useRuntimeConfig } from "#app";
import axios from "axios";

export const getChoosenCategoriesService = async () => {
  const runtimeConfig = useRuntimeConfig();

  // TODO: Use Real API. This is just a placeholder/fake API.
  const response = await axios.get(`${runtimeConfig.public.API_URL}/categories/`);

  return response.data;
};
