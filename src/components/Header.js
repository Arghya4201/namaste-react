import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    // If my device size is greater than sm then make the bg color yellow else keep pink(media query) 
    <div className="flex justify-between shadow-md bg-blue-200 sm:bg-yellow-50">
      <div className="logo=container">
        <img className="w-56" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">Online Status:{onlineStatus ? "✔" : "❌"} </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              if (btnNameReact === "Login") setBtnNameReact("Logout");
              else setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
