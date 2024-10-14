import { client } from '@/graphql';
import { GET_CATEGORIES, GET_PRODUCTS } from '@/graphql/queries';

export const fetchData = async () => {
  const categoriesData = await client.query({ query: GET_CATEGORIES });
  const productsData = await client.query({ query: GET_PRODUCTS });
  return {
    categoriesData: categoriesData.data,
    productsData: productsData.data,
  };
};