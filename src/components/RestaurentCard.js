import { REST_IMAGE_URL } from "../utils/constants.js";
const RestaurentCard = (props) => {
    let {
        name,
        locality,
        areaName,
        avgRating,
        costForTwo,
        cuisines,
        cloudinaryImageId,
    } = props?.resData?.info;
    return (
        <div className="w-[300px] h-[420px] flex flex-col justify-between p-2 border-black rounded-lg hover:shadow-xl">
            <img
                className="w-[100%] h-[200px] object-cover rounded-lg shadow-lg"
                src={REST_IMAGE_URL + cloudinaryImageId}
                alt="restaurent card"
            />
            <p className="font-bold text-xl">{name}</p>
            <p>{cuisines.join(",")}</p>
            <p>{areaName}</p>
            <p>{locality}</p>
            <span>{costForTwo}</span>
            <span>{avgRating}⭐ Rating</span>
        </div>
    );
};
export default RestaurentCard;
