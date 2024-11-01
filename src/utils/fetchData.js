import { client } from '@/graphql';
import { GET_CART_PRODUCT, GET_CATEGORIES, GET_PRODUCTS, GET_SINGLE_PRODUCT, GET_SLUGS } from '@/graphql/queries';
import { useQuery } from '@apollo/client';

export const fetchData = async () => {
  const categoriesData = await client.query({ query: GET_CATEGORIES });
  const productsData = await client.query({ query: GET_PRODUCTS });
  return {
    categoriesData: categoriesData.data,
    productsData: productsData.data,
  };
};

export const fetchSlugs = async () => {
  const slugsData = await client.query({ query: GET_SLUGS });
  return {
    slugsData: slugsData.data
  }
}

export const fetchSingleProduct = async (slug) => {
  const productData = await client.query({
    query: GET_SINGLE_PRODUCT,
    variables: { slug }
  });
  return {
    productData: productData
  }
}