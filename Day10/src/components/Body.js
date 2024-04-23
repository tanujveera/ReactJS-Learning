import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { BODY_API } from "../utils/constants";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilterRestaurants] = useState([]);

  const fetchData = async () => {
    // const data = fetch(
    //   `https://api.allorigins.win/get?url=${encodeURIComponent(
    //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5308668&lng=78.4478991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    //   )}`
    // );

    const data = fetch(BODY_API);

    const jsonData = await data
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        return data;
      });
    console.log(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    // console.log(listOfRestaurants);
  };

  useEffect(() => {
    fetchData();
    console.log("useEffect called");
  }, []);

  console.log("Body rendered");

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-black border-solid"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 bg-gray-100 m-4 border border-black rounded-lg"
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText);
              });
              // console.log(filteredRestaurants);
              setFilterRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4">
          <button
            className="px-4 py-1 bg-gray-100 m-4 border border-black rounded-lg"
            onClick={() => {
              let filterResList = filteredRestaurants.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilterRestaurants(filterResList);
              console.log(filterResList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
