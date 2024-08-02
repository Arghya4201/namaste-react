import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.51800&lng=88.38320&restaurantId=23938&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json.data);
    console.log(json.data.cards[2].card.card.info);
  };

  const { name, costForTwo, cloudinaryImageId, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

   
  if (resInfo === null) return <Shimmer></Shimmer>;
  else
    return (
      <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(", ")}</h2>
        <h2>Menu</h2>
        <ul></ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Coke</li>
      </div>
    );
};

export default RestaurantMenu;
