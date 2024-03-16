import ItemList from "./ItemList";
// import { useState }  from "react";

const RestaurantCategory = ({data, showItems, setShowIndexFnc}) => {
console.log("categories", data);
// const [showItems, setShowItems] = useState(false);
const handleClick = () => {
    console.log("Category");
    // setShowItems(!showItems);
    
    setShowIndexFnc(showItems);
};

return (
    <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                { showItems ? (<span>&#9650;</span>) : (<span>&#9660;</span>)}
            </div>
            <div>
               {showItems && <ItemList items = {data?.itemCards}/>}
            </div>
        </div>
    </div>
  );
};

export default RestaurantCategory;