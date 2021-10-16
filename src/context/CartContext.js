import React, { createContext } from "react";
import useCart from "../hooks/useCart";
export const CartData = createContext();

const CartContext = ({ children }) => {
  const cartinfo = useCart();
  return <CartData.Provider value={cartinfo}>{children}</CartData.Provider>;
};

export default CartContext;
