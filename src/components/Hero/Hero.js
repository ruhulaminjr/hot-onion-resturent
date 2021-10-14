import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="flex hero-container">
      <div className="hero-content">
        <h1 className="big-title">Best Food Waiting For Your Belly</h1>
        <div className="hero-search">
          <input type="text" placeholder="Search Food Name" />
          <button className="btn-rounded search-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
