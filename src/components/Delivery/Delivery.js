import React from "react";
import useCartData from "../../context/usecartData";
import CartItem from "../CartItem/CartItem";
import "./delivery.css";

const Delivery = () => {
  const { cart } = useCartData();
  console.log(cart);
  return (
    <div className="container ">
      <div className="delivery-container">
        <div className="signUp">
          <h1 style={{ textAlign: "center" }}>Edit Delivery Details</h1>
          <br />
          <form>
            <input
              type="text"
              className="input-field"
              placeholder="Delivery Type"
              required
            />
            <input
              type="text"
              className="input-field"
              placeholder="Address"
              required
            />
            <input
              type="text"
              className="input-field"
              placeholder="Flat,suit or floor"
              required
            />
            <input
              type="text"
              className="input-field"
              placeholder="Business Name"
              required
            />
            <input
              type="text"
              className="input-field"
              placeholder="Flat,suit or floor"
              required
            />
            <textarea
              type="text"
              className="input-field"
              placeholder="Add Delivery instructor"
              required
            />
            <button type="submit" className="btn-primary">
              Save And Continue
            </button>
          </form>
        </div>
        <div className="carts">
          <h1>
            From <strong>Gulshan Plaza Restaura GPR</strong>
          </h1>
          <h3>Arriving in 20-30 min</h3>
          <h3>107 Rd No 8</h3>
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
