import axios from "axios";

export const getCategoriesSubService = async (id: number) => {
  const response = await axios.get(`http://localhost:7000/categories/${id}`);

  return response.data;
}

export const getCategoriesSubSubService = async (id: number) => {
  const response = await axios.get(`http://localhost:7000/categories/${id}`);

  const subSubCategories = response.data.subCategories.map((subCategory: any) => {
    return subCategory.subCategories;
  });

  return subSubCategories
}