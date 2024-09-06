import {useState,useEffect} from "react";
import {RES_MENU_URL} from "./constants.js";
const useShowRestaurants = (resId) => {
    const [resInfo,setResInfo]=useState("");
    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async () => {
        const data=await fetch(RES_MENU_URL+resId);
        const jsonData=await data.json();
        setResInfo(jsonData.data);
    }
    return resInfo;
}
export default useShowRestaurants;