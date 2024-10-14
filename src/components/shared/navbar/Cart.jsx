import React, { useState } from 'react';
import styles from '@/styles/shared/Cart.module.css';
import { CartIcon, CloseIcon } from '@/assets/icons/icons';

const Cart = () => {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(!modal);
    }

    return (
        <div className={styles.component}>
            <div className={styles.handler}>
                <button onClick={handleModal} className={styles.toggle}>
                    <div className={styles.handler_indicator}>
                        <p>12</p>
                    </div>
                    <CartIcon />
                </button>
            </div>
            {modal && <div className={styles.modal_area}>
                <div className={styles.modal}>
                    <div className={styles.modal_header}>
                        <p>Your Cart</p>
                        <button onClick={handleModal}>
                            <CloseIcon />
                        </button>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Cart;