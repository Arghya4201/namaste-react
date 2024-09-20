import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resID } = useParams();
  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null) return <Shimmer></Shimmer>;
  // console.log('resInfo:', resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const  itemCards  =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards
  const categories = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(c=> c.card?.card?.['@type'].includes('ItemCategory'))
  console.log('category:', categories);
  console.log(resInfo?.cards[2]?.card?.card?.info);

  const { name, costForTwo, cloudinaryImageId,costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="menu text-center">
      <h1 className="font-bold text-3xl my-5">{name}</h1>
      <p className="text-xl font-bold">Cuisines : {cuisines.join(", ")}-{costForTwoMessage}</p>
      {/*Category is the loop variable over here, for each item in categories array we return that component */}
      {categories.map((category) => (
        <RestaurantCategory data={category.card?.card}></RestaurantCategory>
      ))}
    </div>
  );
};

export default RestaurantMenu;
