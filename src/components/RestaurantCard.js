import { CDN_URL } from "../utils/common";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData;
    const { deliveryTime } = resData.sla;
    return (
        <div className = "m-1 p-1 w-[300px] rounded-3xl hover:shadow-2xl" style={{backgroundColor:"lightgrey"}}>
            <img className = "rounded-3xl w-[300px] h-[200px] object-cover" alt = {name} src ={CDN_URL + cloudinaryImageId}/>
            <h3 className="font-bold py-4 text-xl" > {name} </h3>
            <h3> {cuisines.join(", ")} </h3>
            <h3 className="inline"> {avgRating} Stars </h3>
            <h3 className="inline"> {costForTwo} </h3>
            <h3 className="text-center"> {deliveryTime} minutes </h3>
        </div>
    );
}

// Higher Order function for putting a label on a Restaurant Card...

// Input RestaurantCard => promotedRestaurantCard...

export const withPromotedLabel = (RestaurantCard) => {
    // It is a component...
    return (props) => {
        // a component is a fnc returns a piece of jsx...
        return(
            <div>
                <label>Open</label>
                <RestaurantCard resData = {props}/>
            </div>
        );
    }
};

export default RestaurantCard;