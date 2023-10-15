import { useState,useContext } from "react";
import Title from "./Title"
import { Link } from "react-router-dom";
import useOnlineHook from '../utils/useOnlineHook'
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

  const[btnName,setBtnName] = useState("Login")

  const onlineStatus = useOnlineHook()

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

    return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
        <Title />
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li  className="px-4">
              Online Status: {onlineStatus ? "✔️ " : "🔴"}
            </li>
            <li  className="px-4">
              <Link to="/">Home</Link>
            </li>
            <li  className="px-4">
              <Link to="/about">About</Link>
            </li>
            <li  className="px-4">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="px-4">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-4 font-bold text-xl">
              <Link to="/cart">Cart - ({cartItems.length} items)</Link>
            </li>
            <button className="login" onClick={() => {btnName === "LOGIN" ? setBtnName("LOGOUT") : setBtnName("LOGIN")}}>{btnName}</button>
            {/* <li className="px-4 ">{loggedInUser}</li> */}
          </ul>
        </div>
      </div>
    );
};
export default Header;