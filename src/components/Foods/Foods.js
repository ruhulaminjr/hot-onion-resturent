import React, { useState } from "react";
import useFoods from "../../hooks/useFoods";
import "./food.css";
import SingleFood from "./singleFood/SingleFood";

const Foods = () => {
  const [foods] = useFoods();
  const [showFoods, setShowFoods] = useState(null);
  const [foodClass, setFoodClass] = useState("lunch");
  const showFoodsHandler = (value) => {
    const filterdFood = foods.filter((food) => food.category === value);
    setShowFoods(filterdFood);
    setFoodClass(value);
  };
  return (
    <div className="container">
      <div className="food-list">
        <ul>
          <li
            onClick={() => showFoodsHandler("breakfast")}
            className={foodClass === "breakfast" ? "active-li" : ""}
          >
            BreakFast
          </li>
          <li
            onClick={() => showFoodsHandler("lunch")}
            className={foodClass === "lunch" ? "active-li" : ""}
          >
            Lunch
          </li>
          <li
            onClick={() => showFoodsHandler("dinner")}
            className={foodClass === "dinner" ? "active-li" : ""}
          >
            Dinner
          </li>
        </ul>
      </div>
      <div className="foods-container">
        {showFoods
          ? showFoods.map((food) => <SingleFood key={food.id} food={food} />)
          : foods
              .filter((food) => food.category === "lunch")
              .map((food) => <SingleFood key={food.id} food={food} />)}
      </div>
      <div style={{ margin: "4rem 0", textAlign: "center" }}>
        <button className="btn-primary disbale-btn" disabled>
          Check Out Your Food
        </button>
      </div>
    </div>
  );
};

export default Foods;
