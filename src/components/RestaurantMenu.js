import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { RESTAURANT_CATEGORY } from "../utils/common";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if(!resInfo)
        return <Shimmer/>

    //console.log(resInfo);
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    // const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards);
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c) => c.card.card["@type"] === RESTAURANT_CATEGORY);
    console.log(categories);

return (<div className="text-center">
    <h1 className="font-bold text-xl my-6">{name}</h1>
    <h2 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h2>
{/* <ul>
    {itemCards.map((item) => (<li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"Rs."}{item?.card?.info?.price/100}</li>))}
</ul> */}
    <div>
        {
            categories.map((catData, index) => (
            <RestaurantCategory 
                key={catData?.card?.card?.title}
                data={catData?.card?.card}
                showItems={index === showIndex && true}
                setShowIndexFnc = { (collapse) => collapse ? setShowIndex(null) :setShowIndex(index) }
            />
            ))
        }
    </div>
</div>);    
}

export default RestaurantMenu;