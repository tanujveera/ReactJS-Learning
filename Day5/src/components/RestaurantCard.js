import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData.info?.sla;
  return (
    <div className="res-card" style={{ backgroundColor: "gray" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      ></img>
      <h4>{name}</h4>
      <h6>{cuisines.join(", ")}</h6>
      <h5>{avgRating} Stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{deliveryTime} Minutes</h5>
    </div>
  );
};
export default RestaurantCard;
