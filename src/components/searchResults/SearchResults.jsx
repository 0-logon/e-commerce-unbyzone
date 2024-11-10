import React from 'react';
import styles from '@/styles/searchResults/SearchResults.module.css';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_BY_SEARCH } from '@/graphql/queries';
import ProductCard from '../shared/reusable/ProductCard';

const SearchResults = ({ searchKey }) => {

  const { data, loading, error } = useQuery(GET_PRODUCTS_BY_SEARCH, {
    variables: { searchKey },
    skip: !searchKey,  // Preskoči izvršavanje ako nema vrednosti pretrage
  });

  const quantity = data?.products?.length;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          {
            quantity ? <h1>Showing {quantity} {quantity > 1 ? "products" : "product"} from global suppliers for "{searchKey}"</h1> : <h1>No products found for "{searchKey}"</h1>
          }
        </div>
        <div className={styles.products}>
          {
            data?.products?.map((product) => (
              <ProductCard key={product.id} data={product} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default SearchResults;