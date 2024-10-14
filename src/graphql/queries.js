import { useQuery, gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
query {
  categories {
    name
    slug
  }
}
`;

export const GET_PRODUCTS = gql`
query {
  products {
    id
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