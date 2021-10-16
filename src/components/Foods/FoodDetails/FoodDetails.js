import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useCartData from "../../../context/usecartData";
import "./fooddetails.css";
const FoodDetails = () => {
  const { id } = useParams();
  const [newFoods, setNewFoods] = useState({});
  const { addToCartHandler } = useCartData();
  const [quantity, setQuantity] = useState(1);
  const quantityHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ruhulaminjr/hot-onion-resturent/main/public/foodData.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const currentfoods = data.find((food) => food.id == id);
        setNewFoods(currentfoods);
      });
  }, []);
  return (
    <div className="container ">
      <div className="food-details">
        <div className="food-text">
          <h1>{newFoods.name}</h1>
          <p>{newFoods.desc}</p>
          <div className="food-price">
            <h1>${newFoods.price}</h1>
            <div className="quantity">
              <span onClick={quantityHandler}>-</span>
              <span>{quantity}</span>
              <span
                style={{ color: "red" }}
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </span>
            </div>
          </div>
          <div>
            <button
              className="btn-rounded"
              onClick={() => addToCartHandler(newFoods, quantity)}
            >
              Add Cart
            </button>
            <Link to="/delivery">Food Details</Link>
          </div>
          <div className="food-images">
            {newFoods.images?.map((img) => (
              <img src={img} alt="" style={{ width: "120px" }} key={img} />
            ))}
          </div>
        </div>
        <div className="food-img">
          <img src={newFoods.thumbnail} alt="" style={{ maxHeight: "80%" }} />
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
