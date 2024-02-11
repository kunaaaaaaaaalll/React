import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from "react";
import { SWIGGY_DATA } from "../utils/common";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Conditional Rendering...
    /* if(listOfRestaurants.length === 0) {
         return <Shimmer/>
    }*/

    const connStatus = useOnlineStatus();
    if(connStatus === false)
        return (
            <div className="toast-container">
                <div className="toast">
                    <div>
                        <div className="toast-title">Oh No !!</div>
                        <div className="toast-message">You are currently offline.</div>
                    </div>
                    <button className="toast-close">&times;</button>
                </div>
            </div>
        );

    return listOfRestaurants.length ? (
        <div className = "p-0 m-0 box-border">
            <div className = "flex justify-center items-center ml-1">
                <input type = "text" className = "border border-gray-300 px-3 rounded-md focus:outline-none focus:border-blue-500"
                 value = {searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button className="m-1 bg-blue-600 text-gray-50 px-2 hover:rounded-lg hover:shadow-lg" onClick={() => {
                    console.log(searchText);
                    const searchedList = listOfRestaurants.filter((restaurant) => (restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    setFilteredRestaurants(searchedList);
                }}> Search
                </button>
                <button className="m-1" onClick={() => {
                    const filterList = listOfRestaurants.filter((restaurant) => restaurant?.info?.avgRating > 4)
                    // React uses Reconciliation and Diff Algorithm when setListOfRestaurant func.
                    setFilteredRestaurants(filterList);
                }}>Rating 4.0+
                </button>
            </div>
            <div className = "flex flex-wrap justify-evenly">
                {
                    filteredRestaurants.map((restaurant) => (<Link key={restaurant?.info?.id} to={"/restaurant/" + restaurant?.info?.id}><RestaurantCard key={restaurant?.info?.id} resData = {restaurant?.info}/></Link>))
                }
            </div>
        </div>
    ) : <Shimmer/>;
}

export default Body;