import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { initialState } from './slices/cartSlice';

const loadCartState = () => {
    try {
        const serializedItems = localStorage.getItem('cart');
        const items = serializedItems ? JSON.parse(serializedItems) : [];
        const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0); // izračunaj ukupnu količinu
        return { items, totalQuantity };
    } catch (err) {
        return undefined;
    }
};

const saveCartState = (state) => {
    try {
        const serializedItems = JSON.stringify(state.cart.items);
        localStorage.setItem('cart', serializedItems);
    } catch (err) {
        // console.error("Could not save cart state:", err);
    }
};

const preloadedCartState = loadCartState();

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    preloadedState: { cart: preloadedCartState || initialState },
});

store.subscribe(() => saveCartState(store.getState()));

export default store;
