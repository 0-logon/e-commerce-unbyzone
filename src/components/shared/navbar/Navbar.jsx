import React, { useState } from 'react';
import styles from '@/styles/shared/Navbar.module.css';
import Link from 'next/link';
import Logo from '@/assets/logos/logo.png';
import { BurgerIcon, CloseIcon, UserIcon } from '@/assets/icons/icons';
import NavbarFilter from './NavbarFilter';
import Cart from './Cart';

const Navbar = () => {
    const [mob, setMob] = useState(false);

    const handleMob = () => {
        setMob(!mob);
    }

    return (
        <nav className={styles.component}>
            <div className={styles.top_bar}>
                <div className={styles.top_bar_container}>
                    <p>Price match guarantee - find a better deal? We'll match it!</p>
                </div>
            </div>
            <div className={styles.bottom_bar}>
                <div className={styles.bottom_bar_container}>
                    <div className={styles.nav_group}>
                        <Link href="/" className={styles.brand}>
                            <img src={Logo.src} alt="Unbyzone" />
                        </Link>
                        <div className={styles.navigation}>
                            <Link href="/">Shop</Link>
                            <Link href="/">Categories</Link>
                            <Link href="/">About us</Link>
                            <Link href="/">Blog</Link>
                            <Link href="/">Contact us</Link>
                        </div>
                    </div>
                    <div className={styles.nav_group}>
                        <NavbarFilter />
                        <Link href="/login"><UserIcon /></Link>
                        <Cart />
                        <button onClick={handleMob} className={styles.burger}><BurgerIcon /></button>
                    </div>
                </div>
                <div className={styles.mob_menu} style={{ right: mob ? 0 : "-100%" }}>
                    <div className={styles.mob_menu_header}>
                        <Link href="/">
                            <img src={Logo.src} alt="Unbyzone" />
                        </Link>
                        <div className={styles.mob_menu_header_group}>
                            <Link href="/login"><UserIcon /></Link>
                            <Cart />
                            <button onClick={handleMob}><CloseIcon /></button>
                        </div>

                    </div>
                    <div className={styles.mob_navigation}>
                        <Link href="/">Shop</Link>
                        <Link href="/">Categories</Link>
                        <Link href="/">About us</Link>
                        <Link href="/">Blog</Link>
                        <Link href="/">Contact us</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar