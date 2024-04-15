import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.5308668&lng=78.4478991&restaurantId=446709&submitAction=ENTER"
    );

    const jsonData = await data.json();
    console.log(jsonData);
    console.log(
      jsonData?.data
    );

    setResInfo(
      jsonData?.data
    );
  };

  useEffect(() => {
    fetchMenu();
    console.log("use Effect Menu");
  }, []);

  if (resInfo === null || resInfo === undefined) {
    return <Shimmer />;
  }

  // returns undefined
  // Since we are trying to access it even before the data is coming
  // It returns undefined.
  // So destructure it directly in fetchMenu() itself and use them in JSX syntax.
  console.log(resInfo);

  // const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(itemCards)

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h3>
      <h2>Menu</h2>
      <ul>
        
      </ul>
      <h3>{resInfo[0]?.info?.sla?.slaString}</h3>
    </div>
  );
};

export default RestaurantMenu;
