import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const HeaderComponent = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="flex justify-between sm:bg-blue-50 md:bg-blue-200 lg:bg-blue-500 xl:bg-blue-700  shadow-lg p-0 m-0 box-border">
            <div className="logo-container">
                <img className="block w-20" src = {LOGO_URL} />
            </div>
            <div className="search-bar">
                
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4"><Link to = {"/"}> Home </Link></li>
                    {/* <li><a href="/about"> About Us </a></li> */}
                    <li className="px-4"><Link to = {"/about"}> About Us </Link></li>
                    <li className="px-4"><Link to = {"/grocery"}> Grocery </Link></li>
                    <li className="px-4"><Link to = {"/contact"}> Contact Us </Link></li> 
                    <li className="px-4">Cart</li>
                    <li className="px-4">{loggedInUser}</li>
                    <button className="login" onClick={() => {
               (loginBtn === 'Login') ? setLoginBtn("Logout") : setLoginBtn("Login");
            }}>{loginBtn}</button>
                </ul>
            </div>

        </div>
    );
}

export default HeaderComponent;