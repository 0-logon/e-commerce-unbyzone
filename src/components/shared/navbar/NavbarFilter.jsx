import React from 'react';
import styles from '@/styles/shared/NavbarFilter.module.css';
import { SearchIcon } from '@/assets/icons/icons';
const NavbarFilter = () => {
    return (
        <div className={styles.filter_area}>
            <div className={styles.filter}>
                <input type="text" placeholder="Search" />
                <SearchIcon size={14} />
            </div>
        </div>
    )
}

export default NavbarFilter;