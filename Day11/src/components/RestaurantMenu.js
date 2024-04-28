import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // console.log(resId);

  const dummy = "dummy data";

  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null || resInfo === undefined) {
    return <Shimmer />;
  }

  const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  if (itemCards === null || itemCards === undefined) {
    return <Shimmer />;
  }
  // console.log(categories);
  // console.log(itemCards);
  // const [showItems, setShowItems] = useState(false);

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">
        {resInfo?.cards[2]?.card?.card?.info.name}
      </h1>
      <h3 className="font-bold text-lg">
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(", ")}
      </h3>
      <h2>Menu</h2>
      <div className="">
        {categories.map((c, index) => (
          <RestaurantCategory
            key={c?.card?.card?.title}
            data={c?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={()=>setShowIndex(index)}
            dummy={dummy}
          />
        ))}
      </div>
      {/* <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - ₹ {(item.card.info.defaultPrice !==undefined) ? (item.card.info.defaultPrice/100) : (item.card.info.price/100)}
            </li>
          );
        })}
      </ul> */}
      {/* {Accrodian} */}
    </div>
  );
};

export default RestaurantMenu;
