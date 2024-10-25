import React from 'react';
import styles from '@/styles/home/Discounts.module.css';
import DiscountCard from '../shared/reusable/DiscountCard';
import headphones from '@/assets/images/headphones_product.png';
import laptop from '@/assets/images/acemagic_product.png';
import scooter from '@/assets/images/azhar_product.png';
const Discounts = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <DiscountCard
                    title={"Wireless Earbuds Bluetooth V5.3"}
                    img={headphones.src}
                    price={36}
                    discount={30}
                    url={"/"}
                    bg={"#FFECC8"}
                />
                <DiscountCard
                    title={"CEMAGIC 2024 Newest Laptop"}
                    img={laptop.src}
                    price={720}
                    discount={30}
                    url={"/"}
                    bg={"#FFE3E3"}
                />
                <DiscountCard
                    title={"AZHAR Electric Scooter with Seat"}
                    img={scooter.src}
                    price={1220}
                    discount={40}
                    url={"/"}
                    bg={"#C0EBA6"}
                />
            </div>
        </section>
    )
}

export default Discounts