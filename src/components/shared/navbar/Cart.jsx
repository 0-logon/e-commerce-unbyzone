import React, { useContext, useEffect, useState } from 'react';
import styles from '@/styles/shared/Cart.module.css';
import { CartIcon, CloseIcon } from '@/assets/icons/icons';
import { useSelector } from 'react-redux';
import DataContext from '@/store/context/DataContext';
import { useQuery } from '@apollo/client';

const Cart = () => {
    const [modal, setModal] = useState(false);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const cartItems = useSelector(state => state.cart.items);
    const { setContextData, products } = useContext(DataContext);

    const handleModal = () => {
        setModal(!modal);
    }

    // const { loading, error, data } = useQuery(GET_CART_PRODUCT, {
    //     variables: { id }, 
    //     skip: !id,
    //   });

    return (
        <div className={styles.component}>
            <div className={styles.handler}>
                <button onClick={()=> handleModal()} className={styles.toggle}>
                    <div className={styles.handler_indicator}>
                        <p>{totalQuantity}</p>
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
                    <div className={styles.modal_body}>
                        sss
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Cart;