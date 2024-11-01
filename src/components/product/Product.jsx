import React, { useState } from 'react';
import styles from '@/styles/product/Product.module.css';
import { CartIcon } from '@/assets/icons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '@/store/slices/cartSlice';
import dynamic from 'next/dynamic';
const ProductCartMessage = dynamic(() => import('./ProductCartMessage'), { ssr: false })

const Product = ({ data }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);
    const inCartQuantity = (cartItems.find(item => item.id === data.id)?.quantity) || 0;

    console.log("Redux: ", cartItems);

    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const handleDecrease = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
    };

    const handleChange = (e) => {
        const value = e.target.value;
        // Allow only positive integers
        if (/^\d+$/.test(value)) {
            setQuantity(parseInt(value, 10));
        } else if (value === '') {
            // Allow empty string to clear the field
            setQuantity('');
        }
    };

    const handleAddToCart = () => {
        dispatch(addItem({
            id: data.id,
            quantity,
        }));
        setQuantity(1);
    };

    const handleBlur = () => {
        // Reset quantity to 1 if input is empty or invalid
        if (!quantity || quantity <= 0) {
            setQuantity(1);
        }
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.photo}>
                    <img src={data.photo.url} alt={data.title} />
                </div>
                <div className={styles.details}>
                    <h1>{data.title}</h1>
                    <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.price)}</span>
                    <p>{data.description}</p>
                    <div className={styles.additional_details}>
                        <p><span>Brand:</span> {data.brand.name}</p>
                        <p><span>Category:</span> {data.category.name}</p>
                    </div>
                    <form className={styles.actions_box}>
                        <div className={styles.quantity}>
                            <input
                                type="text"
                                value={quantity}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <div className={styles.quantity_buttons}>
                                <button type='button' onClick={handleIncrease}>+</button>
                                <button type='button' onClick={handleDecrease}>-</button>
                            </div>
                        </div>
                        <button type='button' onClick={handleAddToCart}>Add to cart <CartIcon color={'#fff'} /></button>
                    </form>
                    {
                        inCartQuantity > 0 && <ProductCartMessage inCartQuantity={inCartQuantity}/>
                    }
                </div>
            </div>
        </section>
    )
}

export default Product