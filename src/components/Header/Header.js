import React from "react";
import logo from "../../images/logo2.png";
import cartIcon from "../../images/ICON/shopping-cart.png";
import "./header.css";

const Header = () => {
  return (
    <div className="nav-menu">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="nav-item">
        <div className="cart">
          <button className="cart-btn"><img src={cartIcon} alt="" /></button>
        </div>
        <button>Login</button>
        <button className="btn-rounded">Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
