import React, {
    createContext,
    useState,
    useCallback,
    useContext,
    useEffect,
} from "react";

import AsyncStorage from "@react-native-community/async-storage";

interface Product {
    id: string;
    title: string;
    image_url: string;
    price: number;
    quantity: number;
}

interface CartContext {
    products: Product[];
    addToCart(item: Omit<Product, "quantity">): void;
    increment(id: string): void;
    decrement(id: string): void;
}

const StorageKeyProducts = "@GoMarketplace:products";

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        async function loadProducts(): Promise<void> {
            const storedProducts = await AsyncStorage.getItem(
                StorageKeyProducts,
            );

            if (storedProducts) {
                setProducts([...JSON.parse(storedProducts)]);
            }
        }

        loadProducts();
    }, []);

    const updateAsyncStorage = async (
        productsToStore: Product[],
    ): Promise<void> => {
        await AsyncStorage.setItem(
            StorageKeyProducts,
            JSON.stringify(productsToStore),
        );
    };

    const addToCart = useCallback(
        async product => {
            const existingProduct = products.find(
                item => item.id === product.id,
            );

            if (existingProduct) {
                // setProducts(
                //     products.map(item =>
                //         item.id === product.id
                //             ? { ...product, quantity: item.quantity + 1 }
                //             : item,
                //     ),
                // );
                await increment(product.id);
            } else {
                const newProduct = {
                    ...product,
                    quantity: 1,
                };

                setProducts([...products, newProduct]);

                await updateAsyncStorage(products);
            }
        },
        [increment, products],
    );

    const increment = useCallback(
        async (id: string) => {
            const newProducts = products.map(product =>
                product.id === id
                    ? { ...product, quantity: product.quantity + 1 }
                    : product,
            );

            setProducts(newProducts);

            await updateAsyncStorage(newProducts);
        },
        [products],
    );

    const decrement = useCallback(
        async (id: string) => {
            let newProducts = products;

            const existingProduct = products.find(item => item.id === id);

            if (existingProduct?.quantity === 1) {
                newProducts = products.filter(prod => prod.id !== id);
            } else {
                newProducts = products.map(product =>
                    product.id === id
                        ? { ...product, quantity: product.quantity - 1 }
                        : product,
                );
            }

            setProducts(newProducts);

            await updateAsyncStorage(newProducts);
        },
        [products],
    );

    const value = React.useMemo(
        () => ({ addToCart, increment, decrement, products }),
        [products, addToCart, increment, decrement],
    );

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    );
};

function useCart(): CartContext {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error(`useCart must be used within a CartProvider`);
    }

    return context;
}

export { CartProvider, useCart };
