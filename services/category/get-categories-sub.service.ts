import axios from "axios";
import { CategoriesApiResponseType } from "~/types/categories-api.type";

export const getCategoriesSubService = async (id: number) => {
  const response = await axios.get(`http://localhost:7000/categories/${id}`);

  return response.data as CategoriesApiResponseType;
};

export const getCategoriesSubSubService = async (id: number) => {
  const response = await axios.get<CategoriesApiResponseType>(
    `http://localhost:7000/categories/${id}`,
  );

  // Get the children by the id
  const children = response.data.children;
  const childrenChildren = children.map((child) => child.children);

  // Flatten the array
  return childrenChildren.flat();
};
