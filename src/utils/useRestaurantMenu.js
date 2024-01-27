import { useEffect, useState } from "react"
import { SWIGGY_MENU_DATA } from "./common";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    fetchMenu = async () => {
        const data = await fetch(SWIGGY_MENU_DATA + resId);
        const json = await data.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;