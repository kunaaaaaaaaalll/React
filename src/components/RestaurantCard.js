import { CDN_URL } from "../utils/common";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, delieveryTime, cloudinaryImageId} = resData;
    
    return (
        <div className = "res-card" style={{backgroundColor:"lightgrey"}}>
            <img className = "image" alt = {name} src ={CDN_URL+ cloudinaryImageId}/>
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} Stars</h3>
            <h3>Rs.{costForTwo/100} FOR TWO</h3>
            <h3>{delieveryTime} minutes</h3>
        </div>
    );
}

export default RestaurantCard;