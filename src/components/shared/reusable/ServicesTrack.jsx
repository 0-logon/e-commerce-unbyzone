import React from 'react';
import styles from '@/styles/shared/ServicesTrack.module.css';
import { BoxIcon, DeliveryIcon, PaymentIcon, SupportIcon, TrackingIcon } from '@/assets/icons/icons';

const ServicesTrack = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.service}>
                    <TrackingIcon color={"#333333"} />
                    <p>Order Tracking</p>
                    <p>Track real time your order</p>
                </div>
                <div className={styles.service}>
                    <BoxIcon color={"#333333"} />
                    <p>Free Shipping</p>
                    <p>You will love at great low prices</p>
                </div>
                <div className={styles.service}>
                    <PaymentIcon color={"#333333"} />
                    <p>Flexible Payment</p>
                    <p>Pay with Multiple Credit Cards</p>
                </div>
                <div className={styles.service}>
                    <DeliveryIcon color={"#333333"} />
                    <p>Fast Delivery</p>
                    <p>Experience the joy of fast shipping</p>
                </div>
                <div className={styles.service}>
                    <SupportIcon color={"#333333"} />
                    <p>Premium Support</p>
                    <p>Outstanding premium support</p>
                </div>
            </div>
        </section>
    )
}

export default ServicesTrack