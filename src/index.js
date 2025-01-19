import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/**
 * header
 * -logo
 * -nav items
 * Body
 * -search
 * -resturant card
 * Footer
 * -copyright
 * -links
 * -address
 */

const AppLayout=()=>{
     return(
          <div className="app">
               <Header />
               <Body />
          </div>
     )
};

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<AppLayout />);

