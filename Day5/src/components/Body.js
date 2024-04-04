import resList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";


let filterResList = resList;
const Body = () => {
  

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            filterResList = resList.filter((res) => res.info.avgRating > 4);
            console.log(filterResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterResList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
