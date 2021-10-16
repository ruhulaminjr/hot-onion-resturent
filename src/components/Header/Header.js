import React from "react";
import logo from "../../images/logo2.png";
import cartIcon from "../../images/ICON/shopping-cart.png";
import "./header.css";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="container">
      <div className="nav-menu">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="nav-item">
          <div className="cart">
            <button className="cart-btn">
              <img src={cartIcon} alt="" className="cart-img" />
            </button>
          </div>
          {user ? (
            <>
              {" "}
              <p style={{ color: "red" }}>{user.displayName}</p>{" "}
              <button className="btn-rounded" onClick={logOut}>
                Logout
              </button>{" "}
            </>
          ) : (
            <>
              <Link to="/login">
                {" "}
                <button style={{ color: "#191919", fontSize: "16px" }}>
                  Login
                </button>
              </Link>

              <Link to="/register">
                {" "}
                <button className="btn-rounded">Sign Up</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
