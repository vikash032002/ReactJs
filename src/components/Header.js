import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header=()=>{
     
     const [btnReact , setBtnReact]=useState("Login");
     const onlineStatus=useOnlineStatus();

     return(
          <div className="header">
               <div className="logo-container"> 
                    <img className="logo" src={LOGO_URL}/>
               </div>
               <div className="navitems">
                    <ul>
                         <li>Online Status:{onlineStatus?"🟢":"🔴"}</li>
                         <li><Link to="/">Home</Link></li>
                         <li><Link to="/about">About</Link></li>
                         <li>Contact</li>
                         <li>Cart</li>
                         <button className="login-btn"
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