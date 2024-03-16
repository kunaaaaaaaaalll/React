import { CDN_URL } from "../utils/common";

const ItemList = ({items}) => {
    console.log("items", items);
    return (
    <div>
        {items.map((item) => (
            <div key={item.card.info.id} className="p-2 m-2 border-gray-400 border-b-2 items-start flex justify-between">
                <div className="w-9/12 text-left">
                    <div className="py-2">
                        <span>{item.card.info.name}</span>
                        <span>	&#8377;{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="rounded-3xl w-3/12 h-full p-4 object-cover">
                    <img className="w-[200px] h-[96px]" src={CDN_URL + item.card.info.imageId}/>
                    <button className=" bg-white text-cyan-500 hover:shadow-md hover:text-cyan-700"> Add + </button>
                </div>
            </div>
        ))}
    </div>
);
};

export default ItemList;