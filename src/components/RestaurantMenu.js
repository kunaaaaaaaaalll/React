import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);
    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    // const fetchMenu = async () => {
    //     const data = await fetch(SWIGGY_MENU_DATA + resId);
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // }

    if(!resInfo)
        return <Shimmer/>

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);

return (<div>
    <h1>{name}</h1>
    <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
<ul>
    {itemCards.map((item) => (<li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"Rs."}{item?.card?.info?.price/100}</li>))}
</ul>
</div>
);    
}

export default RestaurantMenu;