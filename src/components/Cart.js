import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Cartcard from "./Cartcard";
import { Link } from "react-router-dom";
const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    let [totalPrice, setTotalPrice] = useState(0);
    const [pay, setPay] = useState(false);
    const [showCartCard, setShowCartCard] = useState(true);
    const [showPriceSummary, setShowPriceSummary] = useState(true);
    useEffect(() => {
        const price = cartItems.reduce((acc, item) => {
            return acc + (item?.card?.info?.price || item?.card?.info?.defaultPrice);
        }, 0);
        setTotalPrice(price);
    }, [cartItems]);
    useEffect(() => {
        setTimeout(() => {
            setPay(false);
            setShowCartCard(true);
            setShowPriceSummary(true);
        }, 10000);
    }, [pay]);
    const handleSound = () => {
        const audio = document.getElementById("payment-sound");
        audio.play();
    };
    if (cartItems.length === 0) {
        return (
            <div className="flex flex-col w-[50%] justify-center items-center mx-auto">
                <img
                    src="https://kotakpensil.com/wp-content/uploads/2020/07/empty-cart-undraw-kotakpensil-com.png"
                    alt="cart_image"
                    className="h-96 rounded-lg mt-3"
                />
                <p className="text-2xl font-semibold m-3 whitespace-nowrap">
                    Your cart is empty
                </p>
                <p className="font-semibold">
                    You can go to home page to view more restaurants
                </p>
                <Link
                    to="/"
                    className="bg-orange-600 text-white font-bold p-3 rounded-lg m-3 whitespace-nowrap"
                >
                    SEE RESTAURANTS NEAR YOU
                </Link>
            </div>
        );
    }
    return (
        <div className="flex flex-col lg:flex-row justify-around">
            {showCartCard && (
                <div className="border-2 mt-5 lg:w-[60%] gap-3 rounded-lg w-full">
                    <h1 className="text-2xl font-bold text-center py-4 rounded-lg">
                        Your Cart
                    </h1>
                    <hr />
                    {<Cartcard item={cartItems} />}
                </div>
            )}
            {showPriceSummary && (
                <div className="mt-5 w-fit h-fit border-2 p-5 m-2 sticky top-24 mx-auto flex flex-col">
                    <p className="font-bold text-slate-500 text-lg p-1">
                        PRICE DETAILS
                    </p>
                    <hr />
                    <p className="p-2 flex justify-between font-semibold">
                        <span>Price ({cartItems.length} item):</span> <span>₹{totalPrice / 100}</span>
                    </p>
                    <p className="p-2 flex justify-between font-semibold">
                        <span>Discount:</span> <span>5%</span>
                    </p>
                    <p className="p-2 flex justify-between font-semibold">
                        <span>Platform Fee:</span> <span>₹1</span>
                    </p>
                    <p className="p-2 flex justify-between font-semibold">
                        <span>Delivery Charges:</span> <span>₹40</span>
                    </p>
                    <hr />
                    <p className="p-2 flex justify-between font-semibold">
                        <span>Total Amount:</span> <span>₹{Math.floor(((totalPrice*0.95)/100)+(40+1))}</span>
                    </p>
                    <p className="p-2 text-xl font-semibold">Total Amount</p>
                    <hr />
                    <p className="p-2 text-green-500 font-semibold">
                        You will save ₹ on this order
                    </p>
                    <button
                        className="border px-9 py-3 m-3 bg-orange-500 rounded-lg font-bold text-white text-lg"
                        onClick={() => {
                            handleSound();
                            setPay(true);
                            setShowCartCard(false);
                            setShowPriceSummary(false);
                        }}
                    >
                        PLACE ORDER
                    </button>
                </div>
            )}
            {pay && (
                <div className="mx-auto whitespace-nowrap">
                    <img src="https://cdn.dribbble.com/users/1751799/screenshots/5512482/media/7d97855e253a86edc1383557c28412bc.gif" />
                </div>
            )}    
        </div>
    );
};
export default Cart;
