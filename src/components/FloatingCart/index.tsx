import React, { useState, useMemo } from "react";

import { useNavigation } from "@react-navigation/native";

import FeatherIcon from "react-native-vector-icons/Feather";
import {
  Container,
  CartPricing,
  CartButton,
  CartButtonText,
  CartTotalPrice,
} from "./styles";

import formatValue from "../../utils/formatValue";
import { sum } from "../../utils/calcHelper";

import { useCart } from "../../hooks/cart";

// Calculo do total
// Navegação no clique do TouchableHighlight

const FloatingCart: React.FC = () => {
  const { products } = useCart();

  const navigation = useNavigation();

  const cartTotal = useMemo(() => {
    // TODO RETURN THE SUM OF THE PRICE FROM ALL ITEMS IN THE CART

    const productsPriceCount = products?.map(productItem => {
      return productItem.quantity * productItem.price;
    });

    const totalPriceCart = sum(productsPriceCount);

    return formatValue(totalPriceCart);
  }, [products]);

  const totalItensInCart = useMemo(() => {
    // TODO RETURN THE SUM OF THE QUANTITY OF THE PRODUCTS IN THE CART

    const qtdProducts = products?.map(productItem => {
      return productItem.quantity;
    });

    const productsCount = sum(qtdProducts);

    return productsCount;
  }, [products]);

  return (
    <Container>
      <CartButton
        testID="navigate-to-cart-button"
        onPress={() => navigation.navigate("Cart")}
      >
        <FeatherIcon name="shopping-cart" size={24} color="#fff" />
        <CartButtonText>{`${totalItensInCart} itens`}</CartButtonText>
      </CartButton>

      <CartPricing>
        <CartTotalPrice>{cartTotal}</CartTotalPrice>
      </CartPricing>
    </Container>
  );
};

export default FloatingCart;
