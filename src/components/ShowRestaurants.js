import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Menushimmer from "./Menushimmer";
import useShowRestaurants from "../utils/useShowRestaurants.js";
import RestaurantCategory from "./RestaurantCategory";

const ShowRestaurants = () => {
    const { resId } = useParams();
    const resInfo = useShowRestaurants(resId);
    const [restaurantData, setRestaurantData] = useState(null);
    const [showIndex,setShowIndex]=useState(null);
    useEffect(() => {
        if (resInfo) {
            setRestaurantData(resInfo);
        }
    }, [resInfo]);

    if (!restaurantData) {
        return <Menushimmer />;
    }

    if (!restaurantData) {
        return <div>Failed to load restaurant data.</div>;
    }
    let category =
        restaurantData.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
            (c) =>
                c.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
    let {
        name,
        avgRating,
        totalRatingsString,
        costForTwoMessage,
        cuisines,
        areaName,
    } = restaurantData?.cards[2]?.card?.card?.info;

    return (
        <div className="font-serif ml-2">
            <h1 className="lg:w-6/12 w-full text-2xl font-bold mt-10 mx-auto mb-5 ">
                {name}
            </h1>
            <div className="p-5 bg-white border rounded-lg shadow-2xl lg:w-[50%] w-fit m-3 lg:mx-auto">
                <div>
                    <span className="">⭐{avgRating}</span>
                    <span className="p-1">({totalRatingsString})</span>
                    <span className="p-1"> {costForTwoMessage}</span>
                </div>
                <div className="text-red-500 p-1">{cuisines.join(", ")}</div>
                <div className="pb-3">
                    <div className="pb-3">
                        Outlet: {areaName} <br />
                    </div>
                    45-50 mins
                </div>
                <hr />
                <div className="p-2">
                    🚴Order above 149 for discounted delivery fee
                </div>
            </div>
            {category.map((category,index) => (
                <RestaurantCategory
                    key={category?.card?.card?.title}
                    data={category?.card?.card}
                    showAccordian={index===showIndex? true:false}
                    setShowIndex={()=>setShowIndex(index)}
                />
            ))}
        </div>
    );
};

export default ShowRestaurants;
