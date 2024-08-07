import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resID} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API+resID
    );
    const json = await data.json();
    setResInfo(json.data);
    console.log(json.data);
  };

  if (resInfo === null) return <Shimmer></Shimmer>;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  console.log(itemCards);

  const { name, costForTwo, cloudinaryImageId, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - {"Rs "}{(item.card.info.price)/100} </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
