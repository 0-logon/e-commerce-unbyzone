import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from '@/styles/shared/Cart.module.css';
import { CartIcon, CloseIcon, DeleteBinIcon } from '@/assets/icons/icons';
import { useDispatch, useSelector } from 'react-redux';
import DataContext from '@/store/context/DataContext';
import { useQuery } from '@apollo/client';
import { GET_CART_PRODUCT } from '@/graphql/queries';
import { removeItem } from '@/store/slices/cartSlice';
import Link from 'next/link';

const Cart = () => {
    const [modal, setModal] = useState(false);
    const modalRef = useRef(null);
    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const cartItems = useSelector(state => state.cart.items);
    const { setContextData, products } = useContext(DataContext);
    const [totalPrice, setTotalPrice] = useState(0);

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

    useEffect(() => {
        let totalPrice = 0;
        cartProductsData.forEach(product => {
            totalPrice += product.price * product.quantity;
        });
        setTotalPrice(totalPrice);
    }, [cartProductsData]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModal(false);
            }
        };

        if (modal) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [modal]);

    return (
        <div className={styles.component}>
            <div className={styles.handler}>
                <button onClick={() => handleModal()} className={styles.toggle}>
                    {totalQuantity > 0 && <div className={styles.handler_indicator}>
                        <p>{totalQuantity}</p>
                    </div>}

                    <CartIcon />
                </button>
            </div>
            {modal && <div className={styles.modal_area}>
                <div ref={modalRef} className={styles.modal}>
                    <div className={styles.modal_header}>
                        <p>Your Cart</p>
                        <button onClick={handleModal}>
                            <CloseIcon />
                        </button>
                    </div>
                    <div className={styles.modal_body}>
                        {
                            cartProductsData.length ? cartProductsData.map((product) => (
                                <div key={product.id} className={styles.item}>
                                    <Link href={`/product/${product.slug}`} onClick={handleModal} className={styles.left_box}>
                                        <div className={styles.img_box}>
                                            <img src={product.photo.url} alt={product.title} />
                                        </div>
                                        <div className={styles.details}>
                                            <p>{product.title}</p>
                                            <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</span>
                                            <span>Quantity: {product.quantity}</span>
                                        </div>
                                    </Link>
                                    <div className={styles.delete_button}>
                                        <button onClick={() => handleRemoveItem(product.id)}><DeleteBinIcon /></button>
                                    </div>
                                </div>
                            )) : <p>Your cart is empty. Start shopping!</p>
                        }
                    </div>
                    <div className={styles.modal_footer}>
                        <div className={styles.total_data}>
                            <p>
                                Total ({totalQuantity} {cartProductsData.length === 1 ? "item" : "items"}): {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalPrice)}
                            </p>
                        </div>
                        {totalQuantity > 0 ? <Link href="/checkout">Checkout</Link> : <Link href="/">Start shopping</Link>}
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default Cart;