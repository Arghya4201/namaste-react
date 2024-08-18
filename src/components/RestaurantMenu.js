import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const {resID} = useParams();
  const resInfo = useRestaurantMenu(resID);


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
