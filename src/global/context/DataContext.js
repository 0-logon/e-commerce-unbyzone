import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

function DataProvider({ children }) {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);


    const setContextData = ({ categories, products }) => {
        setCategories(categories ? categories : []);
        setProducts(products ? products : []);
    }

    // useEffect(() => {
    //     const featured = Object.values(metadata).filter(post => post.featured);
    //     setFeaturedMetadata(featured);
    // }, [metadata]);

    const valueToShare = {
        categories,
        products,
        setContextData
    }

    return (
        <DataContext.Provider value={valueToShare}>
            {children}
        </DataContext.Provider>
    )
}

export { DataProvider }
export default DataContext;