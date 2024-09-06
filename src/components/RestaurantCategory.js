import { useState } from "react";
import AccordianItem from "./AccordianItem";
const RestaurantCategory = ({data,showAccordian,setShowIndex}) => {
    //const [showAccordian, setShowAccordian] = useState(false);
    const handleClick = () => {
       setShowIndex();
    };
    return (
        <div className="flex flex-col m-3">
                <div
                    className="flex lg:w-6/12 w-full justify-between mx-auto m-5 p-5 text-2xl bg-slate-400 cursor-pointer rounded-lg"
                    onClick={handleClick}
                >
                    <div>{data?.title}({data?.itemCards?.length})</div>
                    <div>{showAccordian ? '🔺' : '🔻'}</div>
                </div>
                {showAccordian && (
                    <div>
                        <AccordianItem key={data.itemCards.id} item={data?.itemCards} />
                    </div>
                )}
        </div>
    );
};
export default RestaurantCategory;
