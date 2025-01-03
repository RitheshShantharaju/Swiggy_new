//Api used here is the menu api

import {useEffect, useState} from "react";
import {MENU_API} from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  }

  return resInfo;
};

export default useRestaurantMenu;
