import { useContext } from "react";
import { CartData } from "./CartContext";

const useCartData = () => {
  return useContext(CartData);
};
export default useCartData;
