import ItemList from "./ItemList.";
import {useState} from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = ()=>{
    // console.log("clicked");
    setShowIndex();
  }
  // console.log(data);
  return (
    <div>
      <div className="w-1/2 m-auto bg-gray-50 shadow-lg p-4 my-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {showItems && <ItemList items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
