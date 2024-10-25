import React from 'react';
import styles from '@/styles/shared/DiscountCard.module.css';
import Link from 'next/link';
import { CartIcon } from '@/assets/icons/icons';

const DiscountCard = ({ title, img, price, discount, url, bg }) => {
    const oldPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price)
    const newPrice = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price - ((price * discount) / 100))
    return (
        <div className={styles.component} style={{ backgroundColor: bg }}>
            <div className={styles.body}>
                <div className={styles.details}>
                    <h3>{title}</h3>
                    <p><strike>{oldPrice}</strike></p>
                    <p>{newPrice}</p>
                    <Link href={url}>Shop Now <CartIcon color={"#fff"} size={16}/></Link>
                </div>
                <div className={styles.thumbnail}>
                    <img src={img} alt={title} />
                </div>
            </div>
        </div>
    )
}

export default DiscountCard;