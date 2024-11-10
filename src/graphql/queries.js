import { useQuery, gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
query {
  categories {
    name
    slug
    icon
  }
}
`;

export const GET_PRODUCTS = gql`
query {
  products {
    id
    slug
    title
    price
    description
    brand {
      name
    }
    category {
      name
      slug
    }
    bestSelling
    featuredProduct
    publishedAt
    photo {
      url
    }
  }
}
`

export const GET_SINGLE_PRODUCT = gql`
  query GetProductBySlug($slug: String!) {
    product(where: { slug: $slug }) {
      id
      slug
      title
      price
      description
      brand {
        name
      }
      category {
        name
        slug
      }
      bestSelling
      featuredProduct
      publishedAt
      photo {
        url
      }
    }
  }
`;

export const GET_CART_PRODUCT = gql`
  query GetCartProducts($ids: [ID!]!) {
    products(where: { id_in: $ids }) {
      id
      title
      price
      photo {
        url
      }
    }
  }
`;

export const GET_SLUGS = gql`
query {
  products {
    slug
  }
}
`

export const GET_PRODUCTS_BY_SEARCH = gql`
  query GetProductsBySearch($searchKey: String!) {
    products(where: { 
      OR: [
        { title_contains: $searchKey },
        { description_contains: $searchKey }
      ]
    }) {
      id
      slug
      title
      price
      description
      brand {
        name
      }
      category {
        name
        slug
      }
      bestSelling
      featuredProduct
      publishedAt
      photo {
        url
      }
    }
  }
`;