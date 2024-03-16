import React, {lazy, Suspense, useEffect, useState} from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Loader from "./components/Loader";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";


const AppLayout = () => {
    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: 'Kunal Soni'
        };
        setUserName(data.name);
    }, []);

    return (
        // Provider Given By React-redux works as a Bridge Between appStore to application...
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser} = userName ?? 'Kunal Soni'} >
                <div className = "app">
                    <HeaderComponent />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
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