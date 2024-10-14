import React from 'react';
import styles from '@/styles/home/Hero.module.css';
import { ArrowRightIcon } from '@/assets/icons/icons';
import Link from 'next/link';
import image1 from '@/assets/images/keyboard.png';
import image2 from '@/assets/images/headphones.png';
import customer1 from '@/assets/images/customer_1.jpg';
import customer2 from '@/assets/images/customer_2.jpg';
import customer3 from '@/assets/images/customer_3.jpg';

const Hero = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.intro}>
                    <h1>Find Your Perfect Tech Companion Here</h1>
                    <p>Founded with a vision to redefine the way you shop for electronics, HiTech is your one-stop destination for all things tech</p>
                    <Link href="/">Shop Now <ArrowRightIcon /></Link>
                    <div className={styles.rating}>
                        <div className={styles.rating_group}>
                            <div className={styles.rating_users}>
                                <img src={customer1.src} alt="customer 1" />
                                <img src={customer2.src} alt="customer 2" />
                                <img src={customer3.src} alt="customer 3" />
                            </div>
                            <div className={styles.rating_details}>
                                <p>Proven Excellence <span>4.5</span>-Star Rating</p>
                                <p>Over <span>3,500</span> Customers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.presentation}>
                    <div className={styles.presentation_item__1}>
                        <img src={image1.src} alt="keyboard" />
                    </div>
                    <div className={styles.presentation_item__2}>
                        <img src={image2.src} alt="headphones" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;