import React from "react";
import "./cart.css";
const CartItem = ({ item }) => {
  return (
    <div style={{ margin: "2rem 0" }}>
      <div className="cart-container">
        <div className="cart-item">
          <img src={item.thumbnail} alt="" style={{ width: "100px" }} />
          <div className="item-info">
            <h3>{item.name}</h3>
            <h2 style={{ color: "red" }}>${item.price}</h2>
            <small>Delivery free</small>
          </div>
          <div className="quantity-item">
            <h4>Quantity</h4>
            <h2>{item.quantity}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
