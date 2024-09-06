import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { FaBars } from "react-icons/fa";
const showLoginToast = () => {
    toast.success("user logged in successfully");
};
const showLogoutToast = () => {
    toast.success("user logged out successfully");
};
const Navbar = () => {
    const [btnName, setBtnName] = useState("Login");
    const [handlebar, setHandlebar] = useState(false);
    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector((store) => store.cart.items);
    const handleMenu = () => {
        setHandlebar(!handlebar);
    };
    return (
        <div className="flex justify-between items-center p-2 shadow-md bg-white sticky top-0 z-50 lg:flex ">
            <div className="nav-logo hover:cursor-pointer p-3">
                <img className="w-[8rem]" src={LOGO_URL} alt="logo_image" />
            </div>
            {handlebar && (
                <div className="fixed w-full top-20 left-0 flex flex-col items-center justify-center bg-white p-5">
                    <ul className="font-bold w-full">
                        <li className="p-4">
                            OnlineStatus:{onlineStatus === true ? "✅" : "❌"}
                        </li>
                        <li
                            className="p-4 hover:bg-orange-300"
                            onClick={handleMenu}
                        >
                            <Link to="/">Explore</Link>
                        </li>
                        <li
                            className="p-4 hover:bg-orange-300"
                            onClick={handleMenu}
                        >
                            <Link to="/about">About</Link>
                        </li>
                        <li
                            className="p-4 flex justify-left items-center hover:bg-orange-300"
                            onClick={handleMenu}
                        >
                            <Link to="/cart">
                                <i className="fa-solid fa-cart-shopping">
                                    Cart
                                </i>
                                <sup className="border p-1 m-1 rounded-[80%] bg-orange-500">
                                    {cartItems.length}
                                </sup>
                            </Link>
                        </li>
                        <li onClick={handleMenu}>
                        <button
                            className="mr-[12rem] m-3 px-4 py-1 border bg-orange-300 rounded-lg hover:bg-black hover:text-white"
                            onClick={() => {
                                btnName === "Login"
                                    ? setBtnName("Logout")
                                    : setBtnName("Login");
                                btnName == "Login"
                                    ? showLoginToast()
                                    : showLogoutToast();
                            }}
                        >
                            {btnName}
                        </button>
                        </li>
                    </ul>
                </div>
            )}
            <div className="fixed w-full top-2 flex-col lg:flex lg:flex-row items-center justify-left bg-white p-5 lg:sticky lg:p-0 lg:w-auto hidden">
                <ul className="pr-10 font-bold lg:flex">
                    <li className="p-4 lg:flex">
                        OnlineStatus:{onlineStatus === true ? "✅" : "❌"}
                    </li>
                    <li className="p-4 hover:bg-orange-300">
                        <Link to="/">Explore</Link>
                    </li>
                    <li className="p-4 hover:bg-orange-300">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="p-4 flex justify-center items-center hover:bg-orange-300">
                        <Link to="/cart">
                            <i className="fa-solid fa-cart-shopping">Cart</i>
                            <sup className="border p-1 m-1 rounded-[80%] bg-orange-500">
                                {cartItems.length}
                            </sup>
                        </Link>
                    </li>
                </ul>
                <button
                    className="mr-6 m-5 px-4 py-1 border bg-orange-300 rounded-lg hover:bg-black hover:text-white"
                    onClick={() => {
                        btnName === "Login"
                            ? setBtnName("Logout")
                            : setBtnName("Login");
                        btnName == "Login"
                            ? showLoginToast()
                            : showLogoutToast();
                    }}
                >
                    {btnName}
                </button>
                <div>
                    <Toaster />
                </div>
            </div>
            <FaBars
                className="text-3xl cursor-pointer lg:hidden"
                onClick={handleMenu}
            />
        </div>
    );
};
export default Navbar;
