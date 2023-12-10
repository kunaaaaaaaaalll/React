import { useState } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    return (
        <div className = "header">
            <div className = "logo-container">
                <img className = "logo" src = {LOGO_URL} />
            </div>
            <div className = "search-bar">
                
            </div>
            <div className = "nav-items">
                <ul>
                    <li><Link to = {"/"}> Home </Link></li>
                    <li><a href="/about"> About Us </a></li>
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