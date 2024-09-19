import RestaurantCard  from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilterRestaurant] = useState([]);
  console.log('List of restaurants',ListOfRestaurants);

  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };


  if (useOnlineStatus() === false)
    return (<h1>Looks Like You are offline, Please check your internet connection!!</h1>)

  return ListOfRestaurants.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search">
          <input className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button className="px-4 py-2 m-4 bg-green-100 rounded-lg"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 m-4 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = ListOfRestaurants.filter(
                (res) => res.info.avgRating > 4.6
              );
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurant
          </button></div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant}></RestaurantCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
