import React, {lazy, Suspense} from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Loader from "./components/Loader";
// import Grocery from "./components/Grocery";

const AppLayout = () => {
    return (
        <div className = "app">
            <HeaderComponent />
            <Outlet />
        </div>
    );
}

const Grocery = lazy(() => import("./components/Grocery"));

// createBrowerRouter create routing configurations.
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        /* this path will work as a master component and child components will replace 
        while changing routing that's why we use <Outlet/> it will replace by it */
        children: [
        {
            path: "/",
            element: <Body />
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <ContactUs />
        },
        {
            path: "/grocery",
            element: <Suspense fallback={<Loader/>}>
                <Grocery />
            </Suspense>
        },
        {
            path: "/restaurant/:resId",
            element: <RestaurantMenu />
        }
        ]
    },
]);

// now we need to provide this appRouter to something which uses this to render components

const root = ReactDOM.createRoot(document.getElementById('root'));

// now use routerProvider to render components when routing changes...
root.render(<RouterProvider router = {appRouter}/>);