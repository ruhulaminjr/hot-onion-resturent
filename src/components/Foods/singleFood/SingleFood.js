import React from "react";
import "./singlefood.css";

const SingleFood = ({food}) => {
  return (
    <div className="food-card flex">
      <div className="food-logo">
        <img src={food.thumbnail} alt={food.name} />
      </div>
      <h4 style={{ fontWeight: "normal" }}>{food.name}</h4>
      <p style={{ opacity: ".7" }}>How we dream about our future</p>
      <h2>${food.price}</h2>
    </div>
  );
};

export default SingleFood;
