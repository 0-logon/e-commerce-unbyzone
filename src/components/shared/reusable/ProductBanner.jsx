import React from 'react';
import styles from '@/styles/shared/ProductBanner.module.css';
import hreadphones from '@/assets/images/headphones_product_2.png';

const ProductBanner = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.banner}>
                    <img src={hreadphones.src} alt="HarmonyHear Headphone" />
                    <div className={styles.discount_badge}>
                        30%
                    </div>
                    <h3>HarmonyHear Headphone</h3>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </section>
    )
}

export default ProductBanner;