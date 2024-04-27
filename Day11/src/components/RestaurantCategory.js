import ItemList from "./ItemList.";

const RestaurantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="w-1/2 m-auto bg-gray-50 shadow-lg p-4 my-4">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        <ItemList items={data?.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
