import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header=()=>{
     
     const [btnReact , setBtnReact]=useState("Login");
     const onlineStatus=useOnlineStatus();

     const {loggedInUser}=useContext(UserContext);
     // console.log(loggedInUser);

     // subscribing to the store using a selector
     const cartItem=useSelector( (store)=>store.cart.items);
     console.log(cartItem);



     return(
          <div className="flex justify-between border-[1px]  ">
               <div className="w-[100px]"> 
                    <img className="logo" src={LOGO_URL}/>
               </div>
               <div className="flex">
                    <ul className="flex gap-3 items-center ">
                         <li>Online Status:{onlineStatus?"🟢":"🔴"}</li>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/about">About</Link></li>
                         <li><Link to="/contact">Contact</Link></li>
                         <li className="font-bold"><Link to="/cart">Cart ({cartItem.length} items) </Link></li>
                         <li>Login : {loggedInUser}</li>
                         <button className="rounded-sm border-[1px] border-pink-700 w-20  p-1 mr-1.5 bg-amber-100"
                         onClick={()=>{
                              btnReact=="Login"?setBtnReact("Logout"):setBtnReact("Login");
                         }}
                         >
                             {btnReact}
                         </button>
                    </ul>
                    
               </div>
          </div>
     )
};

export default Header;