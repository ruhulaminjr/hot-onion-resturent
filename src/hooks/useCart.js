import { useState } from "react";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const addToCartHandler = (obj, itemCount) => {
    const isItemOnCart = cart.find((item) => item.id === obj.id);
    if (!isItemOnCart) {
      obj["quantity"] = itemCount;
      console.log(obj);
      setCart([...cart, obj]);
    } else {
      console.log("cart Already Added");
      console.log(cart);
    }
  };
  return { cart, setCart, addToCartHandler };
};

export default useCart;
