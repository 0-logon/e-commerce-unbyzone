import React from 'react';
import styles from '@/styles/product/Product.module.css';

const ProductCartMessage = ({inCartQuantity}) => {
    return (
        <div className={styles.cart_message}>
            <p>This product is available in your cart!</p>
            <p>Quantity: {inCartQuantity}</p>
        </div>
    );
}

export default ProductCartMessage;