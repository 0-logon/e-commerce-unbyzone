import { createContext, useMemo, useReducer } from "react";

const DataContext = createContext();

const initialState = {
    categories: [],
    products: []
};

const dataReducer = (state, action) => {
    switch (action.type) {
        case "SET_CATEGORIES":
            return { ...state, categories: action.payload };
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        case "RESET_DATA":
            return initialState;
        default:
            return state;
    }
};

function DataProvider({ children }) {
    const [state, dispatch] = useReducer(dataReducer, initialState);

    const setContextData = ({ categories, products }) => {
        dispatch({ type: "SET_CATEGORIES", payload: categories.categories || [] });
        dispatch({ type: "SET_PRODUCTS", payload: products.products || [] });
    };

    // Filter best-selling products from the state
    const bestSellingProducts = useMemo(() => {
        return state.products.filter(product => product.bestSelling);
    }, [state.products]);

    const valueToShare = {
        setContextData,
        categories: state.categories,
        products: state.products,
        bestSellingProducts
    };

    return (
        <DataContext.Provider value={valueToShare}>
            {children}
        </DataContext.Provider>
    );
}

export { DataProvider };
export default DataContext;
