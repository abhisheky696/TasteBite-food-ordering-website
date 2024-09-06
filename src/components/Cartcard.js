import { ACCORDIAN_IMAGE_URL } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
const Cartcard = ({ item }) => {
    const dispatch = useDispatch();
    const handleRemove = (id) => {
      dispatch(removeItem(id));
    }
    const showToast = () => {
        toast.error("item removed successfully");
    };
    return (
        <div className="max-w-3xl mx-auto px-4">
            {item.map((mp) => (
                <div
                    key={mp.card.info.id}
                    className="m-5 p-4 flex flex-col md:flex-row justify-between items-center bg-white border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
                >
                    <div className="w-full md:w-2/3 mb-4 md:mb-0">
                        <div className="text-lg font-semibold text-gray-800">
                            {mp?.card?.info?.name}
                        </div>
                        <div className="text-green-600 font-medium">
                            ₹
                            {mp?.card?.info?.price / 100 ||
                                mp?.card?.info?.defaultPrice / 100}
                        </div>
                        <div className="text-gray-600 mt-2">
                            {mp?.card?.info?.description}
                        </div>
                    </div>
                    <div className="relative w-full md:w-1/3 text-center">
                        <img
                            src={ACCORDIAN_IMAGE_URL + mp?.card?.info?.imageId}
                            className="w-[250px] h-[180px] object-cover rounded-md"
                            alt=""
                        />
                        <button
                            onClick={() => {
                                showToast();
                                handleRemove(mp?.card?.info?.id);
                            }}
                            className="px-5 py-1 border rounded-lg font-bold text-green-800 bg-white absolute -bottom-2 left-[70px]"
                        >
                            Remove
                        </button>
                        <div>
                            <Toaster />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Cartcard;
