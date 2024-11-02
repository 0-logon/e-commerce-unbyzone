import React, { useContext, useEffect, useState } from 'react';
import styles from '@/styles/shared/Cart.module.css';
import { CartIcon, CloseIcon, DeleteBinIcon } from '@/assets/icons/icons';
import { useDispatch, useSelector } from 'react-redux';
import DataContext from '@/store/context/DataContext';
import { useQuery } from '@apollo/client';
import { GET_CART_PRODUCT } from '@/graphql/queries';
import { removeItem } from '@/store/slices/cartSlice';

const Cart = () => {
    const [modal, setModal] = useState(false);
    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const cartItems = useSelector(state => state.cart.items);
    const { setContextData, products } = useContext(DataContext);

    const handleModal = () => {
        setModal(!modal);
    }

    const cartItemIds = cartItems.map((item) => item.id);
    const missingProductIds = cartItemIds.filter((id) => !products.some((product) => product.id === id));

    useQuery(GET_CART_PRODUCT, {
        variables: { ids: missingProductIds },
        skip: missingProductIds.length === 0,
        onCompleted: (data) => {
            if (data?.products?.length) setContextData({ products: { products: data.products } });
        },
    });

    const cartProductsData = products
        .filter(product => cartItemIds.includes(product.id))
        .map(product => {
            const cartItem = cartItems.find(item => item.id === product.id);
            return {
                ...product,
                quantity: cartItem ? cartItem.quantity : 0
            };
        });

    const handleRemoveItem = (id) => {
        dispatch(removeItem(id));
    };

    return (
        <div className={styles.component}>
            <div className={styles.handler}>
                <button onClick={() => handleModal()} className={styles.toggle}>
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
                        {
                            cartProductsData.map((product) => (
                                <div key={product.id} className={styles.item}>
                                    <div className={styles.left_box}>
                                        <div className={styles.img_box}>
                                            <img src={product.photo.url} alt={product.title} />
                                        </div>
                                        <div className={styles.details}>
                                            <p>{product.title}</p>
                                            <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</span>
                                            <span>Quantity: {product.quantity}</span>
                                        </div>
                                    </div>
                                    <button onClick={()=> handleRemoveItem(product.id)}><DeleteBinIcon /></button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Cart;