import React, { useContext } from 'react';
import styles from '@/styles/home/Categories.module.css';
import DataContext from '@/store/context/DataContext';
import Link from 'next/link';

const Categories = () => {
    const { categories } = useContext(DataContext);
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {categories.slice(0, 5)?.map((category) => (
                    <Link href={category.slug} key={category.name}>
                        <i className={`bi bi-${category.icon}`}></i>
                        <p>{category.name}</p>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Categories;