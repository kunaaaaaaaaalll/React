import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import {useState} from "react";

const Body = () => {
    /* This is React Super Variable where useState() is maintaining the state of the variable
        and we are passing the default value blank array in the useState([]) to intializing the listOfRestaurants*/

        // it is array destructuring...
    let [listOfRestaurants, setListOfRestaurant] = useState(resObj);
    let list = useState(resObj);
    console.log(list);
    return (
        <div className = "body">
            <div className = "search">
                <button className="filter" onClick={() => {
                    const filterList = listOfRestaurants.filter((restaurant) => restaurant.avgRating > 4)
                    // React uses Reconciliation and Diff Algorithm when setListOfRestaurant func.
                    setListOfRestaurant(filterList);
                }}>Rating 4.0+</button>
            </div>
            <div className = "res-container">
                {
                    listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.id} resData = {restaurant}/>))
                }
            </div>
        </div>
    );
}

export default Body;