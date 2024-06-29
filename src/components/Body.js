import RestaurantCard from "./RestaurantCard"
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState(restList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.data.avgRating > 4.6
            );
            setListOfRestaurants(filteredList)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {
          ListOfRestaurants.map((resturant) => (
            <RestaurantCard
              key={resturant.data.id}
              resData={resturant}
            ></RestaurantCard>
          ))
        }
      </div>
    </div>
  );
};

export default Body;
