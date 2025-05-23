import RestaurentCard from "./RestaurentCard.js";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Body = () => {
    const [rest, setRestaurents] = useState([]);
    const [filterRest, setFilterRest] = useState([]);
    const [searchText, setSearchText] = useState("");
    const onlineStatus=useOnlineStatus();
    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        let data = await fetch(
            "https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.6655181%26lng%3D77.258312%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
        );
       
        let jsonData = await data.json();
        setRestaurents(
            jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilterRest(
            jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
    };
    
    if(!filterRest&&!rest) {
        return <h1>No available restaurants</h1>
    }
    if(filterRest.length === 0) {
        return <Shimmer/>
    }
    if(onlineStatus===false) {
        return <h1>it looks like you are offline. <br/> Please check your internet connection .</h1>
    }
    return (
        <div className="body">
            <div className="flex flex-col lg:gap-6 justify-center items-center lg:flex lg:flex-row">
                <button
                    className="px-3 py-2 border bg-orange-400 hover:text-white hover:bg-black m-5 lg:m-2 rounded-lg"
                    onClick={() => {
                        let filter = filterRest.filter(
                            (res) => res?.info?.avgRating > 4.3
                        );
                        setFilterRest(filter);
                    }}
                >
                    TOP RATED RESTAURANTS
                </button>
                <div className="lg:m-2 px-3 py-2">
                    <input
                        type="text"
                        className="border-2 border-orange-700 p-2 rounded-lg"
                        placeholder="search your restaurents"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="px-3 py-2 bg-orange-400 mx-3 rounded-lg hover:text-white hover:bg-black "
                        onClick={() => {
                            let filter = rest.filter((res) =>
                                res.info.name
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase())
                            );
                            setFilterRest(filter);
                        }}
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-6 justify-center items-center">
                {filterRest.map((res) => (
                    <Link key={res?.info?.id} to={'/restaurants/'+res?.info?.id} ><RestaurentCard resData={res} /></Link>
                ))}
            </div>
            
        </div>
    );
};
export default Body;
