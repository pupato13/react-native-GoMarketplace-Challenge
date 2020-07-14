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

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      // TODO LOAD ITEMS FROM ASYNC STORAGE
    }

    loadProducts();
  }, []);

  const getProduct = (productIndex: number): Product => {
    return products[productIndex];
  };

  const getProductIndex = (id: string): number => {
    return products.findIndex(product => product.id === id);
  };

  const addToCart = useCallback(
    async product => {
      // TODO ADD A NEW ITEM TO THE CART

      const newProduct: Product = {
        id: product.id,
        image_url: product.image_url,
        price: product.price,
        quantity: 1,
        title: product.title,
      };

      // Need to add to async storage instead of to
      setProducts([...products, newProduct]);
    },
    [products],
  );

  const increment = useCallback(
    async (id: string) => {
      // TODO INCREMENTS A PRODUCT QUANTITY IN THE CART
      console.log("incrementing");

      const productIndex = getProductIndex(id);

      if (productIndex < 0) return;

      const product = getProduct(productIndex);

      product.quantity += 1;

      products[productIndex] = product;
    },
    [products, getProduct, getProductIndex],
  );

  const decrement = useCallback(
    async (id: string) => {
      // TODO DECREMENTS A PRODUCT QUANTITY IN THE CART
      console.log("decrementing");

      const productIndex = getProductIndex(id);

      if (productIndex < 0) return;

      const product = getProduct(productIndex);

      product.quantity -= 1;

      products[productIndex] = product;

      // if (product.quantity === 0) {
      //   const newProducts = products.splice(productIndex, 1);

      //   setProducts(newProducts);
      // } else {
      //   products[productIndex] = product;
      // }
    },
    [products, getProduct, getProductIndex],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
