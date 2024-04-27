import { IMG_ITEM_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className=" p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
          <div className="w-9/12">
            <div className="py-2 ">
              <span>{item.card.info.name}</span>
              <span> - ₹{(item.card.info.defaultPrice !==undefined) ? (item.card.info.defaultPrice/100) : (item.card.info.price/100)}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="p-4">
            <img src={IMG_ITEM_URL + item?.card?.info?.imageId} className="w-16 h-14 right-0"/>
            <div className="mx-2">
              <button className="p-1 rounded-lg bg-green-300 shadow-lg absolute text-xs">Add +</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
