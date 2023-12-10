import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import { SWIGGY_DATA } from "../utils/common";
import Shimmer from "./Shimmer";

const Body = () => {
    /* This is React Super Variable where useState() is maintaining the state of the variable
        and we are passing the default value blank array in the useState([]) to intializing the listOfRestaurants*/

        // it is array destructuring...
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(SWIGGY_DATA);
        const json = await data.json();
        // Optional Chaining...
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Conditional Rendering...
    /* if(listOfRestaurants.length === 0) {
         return <Shimmer/>
    }*/

    return listOfRestaurants.length ? (
        <div className = "body">
            <div className = "search">
                <input type = "text" className = "search-cards" value = {searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button onClick={() => {
                    console.log(searchText);
                    const searchedList = listOfRestaurants.filter((restaurant) => (restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    setFilteredRestaurants(searchedList);
                }}> Search
                </button>
                <button className="filter" onClick={() => {
                    const filterList = listOfRestaurants.filter((restaurant) => restaurant?.info?.avgRating > 4)
                    // React uses Reconciliation and Diff Algorithm when setListOfRestaurant func.
                    setFilteredRestaurants(filterList);
                }}>Rating 4.0+
                </button>
            </div>
            <div className = "res-container">
                {
                    filteredRestaurants.map((restaurant) => (<RestaurantCard key={restaurant?.info?.id} resData = {restaurant?.info}/>))
                }
            </div>
        </div>
    ) : <Shimmer/>;
}

export default Body;