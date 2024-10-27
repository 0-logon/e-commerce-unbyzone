import React from 'react';
import styles from '@/styles/home/HappyCustomers.module.css';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons/icons';
import SwiperCustomers from '../shared/swiper/SwiperCustomers';

const HappyCustomers = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Happy Customers</h2>
          <div className={styles.arrows}>
            <button id='prevButton'><ArrowLeftIcon color={"#666666"} /></button>
            <button id='nextButton'><ArrowRightIcon color={"#666666"} /></button>
          </div>
        </div>
        <SwiperCustomers />
      </div>
    </section>
  )
}

export default HappyCustomers