import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchData = async (resId) => {
    const data = await fetch(MENU_API + resId);

    const jsonData = await data.json();
    // console.log(jsonData);
    console.log(jsonData?.data);

    setResInfo(jsonData?.data);
  };

  useEffect(() => {
    fetchData(resId);
    console.log("use Effect Menu");
  }, []);

  return resInfo;
}
export default useRestaurantMenu;