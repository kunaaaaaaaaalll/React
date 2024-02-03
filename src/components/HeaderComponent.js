import { useState } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    return (
        <div className="flex justify-between">
            <div className="logo-container">
                <img className="w-56" src = {LOGO_URL} />
            </div>
            <div className="search-bar">
                
            </div>
            <div className="flex p-4 m-4">
                <ul>
                    <li><Link to = {"/"}> Home </Link></li>
                    {/* <li><a href="/about"> About Us </a></li> */}
                    <li><Link to = {"/about"}> About Us </Link></li>
                    <li><Link to = {"/grocery"}> Grocery </Link></li>
                    <li><Link to = {"/contact"}> Contact Us </Link></li> 
                    <li>Cart</li>
                </ul>
            </div>
            <button className="login" onClick={() => {
               (loginBtn === 'Login') ? setLoginBtn("Logout") : setLoginBtn("Login");
            }}>{loginBtn}</button>
        </div>
    );
}

export default HeaderComponent;