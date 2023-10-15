import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenuHook = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  console.log(resId)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json)
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenuHook