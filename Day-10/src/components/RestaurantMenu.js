import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null || resInfo === undefined) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  if (itemCards === null || itemCards === undefined) {
    return <Shimmer />;
  }
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>
      <h3>{resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - {item.card.info.price / 100}
            </li>
          );
        })}
      </ul>
      <h3>{resInfo[0]?.info?.sla?.slaString}</h3>
    </div>
  );
};

export default RestaurantMenu;
