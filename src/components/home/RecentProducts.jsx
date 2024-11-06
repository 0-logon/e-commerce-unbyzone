import React, { useContext } from 'react';
import styles from '@/styles/home/RecentProducts.module.css';
import DataContext from '@/store/context/DataContext';
import Link from 'next/link';
import { ArrowRightIcon } from '@/assets/icons/icons';
import ProductCard from '../shared/reusable/ProductCard';
import { getLatestItems } from '@/utils/helpers';

const RecentProducts = () => {
    const { products } = useContext(DataContext);
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Latest Products</h2>
                    <Link href="/">View All <ArrowRightIcon color={"#6e6e6e"} /></Link>
                </div>
                <div className={styles.products}>
                    {
                        getLatestItems(products, 'publishedAt', 4).map((product) => (
                            <ProductCard key={product.id} data={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default RecentProducts;