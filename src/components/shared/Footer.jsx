import React from 'react';
import styles from '@/styles/shared/Footer.module.css';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className={styles.component}>
            <div className={styles.container}>
                <div className={styles.info}>
                    <div className={styles.info_group}>
                        <h4>Where abouts</h4>
                        <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                    </div>
                    <div className={styles.info_group}>
                        <h4>Mailbox</h4>
                        <a href="mailto:hello@example.io">hello@example.io</a>
                    </div>
                    <div className={styles.info_group}>
                        <h4>Contact</h4>
                        <a href="call:(808) 555-0111">(808) 555-0111</a>
                    </div>
                </div>
                <div className={styles.navigation}>
                    <div className={styles.navigation_group}>
                        <h4>Pages</h4>
                        <div className={styles.navigation_links}>
                            <Link href='/'>About us</Link>
                            <Link href='/'>Categories</Link>
                            <Link href='/'>Shop</Link>
                            <Link href='/'>Contact us</Link>
                        </div>
                    </div>
                    <div className={styles.navigation_group}>
                        <h4>Resource</h4>
                        <div className={styles.navigation_links}>
                            <Link href='/'>Blogs</Link>
                            <Link href='/'>FAQ</Link>
                            <Link href='/'>Reviews</Link>
                        </div>
                    </div>
                    <div className={styles.navigation_group}>
                        <h4>Connected</h4>
                        <div className={styles.navigation_links}>
                            <Link href='/'>Instagram</Link>
                            <Link href='/'>Facebook</Link>
                            <Link href='/'>YouTube</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.news}>
                    <h4>Connected</h4>
                    <form>
                        <input type="text" placeholder='Enter your name' />
                        <input type="text" placeholder='Enter your email' />
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </footer>
    )
}

export default Footer