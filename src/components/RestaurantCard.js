import { CDN_URL } from "../utils/common";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;
    const { deliveryTime } = resData.sla;
    return (
        <div className = "res-card" style={{backgroundColor:"lightgrey"}}>
            <img className = "image" alt = {name} src ={CDN_URL + cloudinaryImageId}/>
            <h3> {name} </h3>
            <h3> {cuisines.join(", ")} </h3>
            <h3> {avgRating} Stars </h3>
            <h3> {costForTwo} </h3>
            <h3> {deliveryTime} minutes </h3>
        </div>
    );
}

export default RestaurantCard;