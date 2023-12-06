import React from "react";
import ReactDOM  from "react-dom/client";
import HeaderComponent from "./components/HeaderComponent";
import Body from "./components/Body";

const AppLayout = () => {
    return (
        <div className = "app">
            <HeaderComponent />
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);