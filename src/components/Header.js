import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header=()=>{
     
     const [btnReact , setBtnReact]=useState("Login");

     return(
          <div className="header">
               <div className="logo-container"> 
                    <img className="logo" src={LOGO_URL}/>
               </div>
               <div className="navitems">
                    <ul>
                         <li>Home</li>
                         <li>About</li>
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