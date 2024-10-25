import React, { useContext } from 'react';
import styles from '@/styles/home/BestSelling.module.css';
import Link from 'next/link';
import { ArrowRightIcon } from '@/assets/icons/icons';
import DataContext from '@/global/context/DataContext';
import ProductCard from '../shared/reusable/ProductCard';

const BestSelling = () => {
    const { bestSellingProducts } = useContext(DataContext);
    
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2>Best Selling Products</h2>
                    <Link href="/">View All <ArrowRightIcon color={"#6e6e6e"} /></Link>
                </div>
                <div className={styles.products}>
                    {
                        bestSellingProducts.slice(0, 4).map((product) => (
                            <ProductCard key={product.id} data={product} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BestSelling;