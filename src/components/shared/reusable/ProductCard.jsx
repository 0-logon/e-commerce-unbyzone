import Link from 'next/link';
import React from 'react';
import styles from '@/styles/shared/ProductCart.module.css';

const ProductCard = ({ data }) => {
  return (
    <Link href={`/product/${data.slug}`} className={styles.component}>
      <div className={styles.card_container}>
        <div className={styles.thumbnail_container}>
          <img src={data.photo.url} alt={data.title} />
        </div>
        <h3>{data.title}</h3>
        <p>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.price)}</p>
      </div>
    </Link>
  )
}

export default ProductCard;