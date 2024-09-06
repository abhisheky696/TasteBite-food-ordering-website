import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar.js";
import Footer from "./src/components/Footer.js";
import Body from "./src/components/Body.js";
import About from "./src/components/About.js";
import Cart from "./src/components/Cart.js";
import Error from "./src/components/Error.js";
import ShowRestaurants from "./src/components/ShowRestaurants.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./src/utils/appStore.js";
const Main = () => {
    return (
        <Provider store={appStore}>
            <div className="main">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </Provider>
    );
};
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/restaurants/:resId",
                element: <ShowRestaurants />,
            },
        ],
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
