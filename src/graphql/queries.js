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