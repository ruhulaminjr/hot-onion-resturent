import { useEffect, useState } from "react";

const useFoods = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ruhulaminjr/hot-onion-resturent/main/public/foodData.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, []);
  return [foods];
};

export default useFoods;
