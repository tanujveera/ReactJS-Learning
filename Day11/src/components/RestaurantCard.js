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
    <div className="res-card m-4 p-4 w-[250px] grid rounded-md hover:bg-gray-300 bg-gray-200">
      <img
        className="res-logo rounded-md shadow-md"
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

export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">{props?.resData?.info?.aggregatedDiscountInfoV3?.header +" "+ props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader}</label>
        <RestaurantCard {...props}/>
        {/* {console.log(props?.resData?.info)} */}
      </div>
    )
  }
};

export default RestaurantCard;
