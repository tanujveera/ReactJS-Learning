import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "red",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData.info?.sla;
  return (
    <div className="res-card m-4 p-4 w-[250px] grid rounded-md" style={{ backgroundColor: "gray" }}>
      <img
        className="res-logo rounded-md"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      ></img>
      <h4 className="font-medium py-2 text-lg">{name}</h4>
      <h6>{cuisines.join(", ")}</h6>
      <h5>{avgRating} Stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{deliveryTime} Minutes</h5>
    </div>
  );
};
export default RestaurantCard;
