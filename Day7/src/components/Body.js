import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

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

    const data = fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.5308668&lng=78.4478991&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

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
    setFilterRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants);
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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className=""
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) => {return res.info.name.toLowerCase().includes(searchText)});
              // console.log(filteredRestaurants);
              setFilterRestaurants(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            let filterResList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurants(filterResList);
            console.log(filterResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
