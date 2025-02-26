import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
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

// lazy loading example
const About=lazy(()=>import("./components/About"));


const AppLayout=()=>{

     const[userName,setUserName]=useState();

     // Authentication useing context
          useEffect(()=>{
               const data={
                    name:"Puchu"
               }
               setUserName(data.name);
          },[])

     return(
          <Provider store={appStore}>
               <UserContext.Provider  value={{loggedInUser:userName , setUserName}}>
                <div className="app">
               <Header />
               <Outlet />
          </div>
          </UserContext.Provider>
          </Provider>
         
     )
};

const appRouter=createBrowserRouter([
     {
          path:"/",
          element:<AppLayout />,
          children:[
               {
                    path:"/",
                    element:<Body />
               },
               {
          path:"/about",
          element:<Suspense fallback={<h1>Loading......wait PuchuPie❤️</h1>}><About /></Suspense>,
         
     },
     {
          path:"/restaurant/:resId",
          element:<RestaurantMenu />
     },
     {
          path:"/cart",
          element:<Cart />
     },
      {
          path:"/contact",
          element:<Contact />
     },
          ],
          errorElement:<Error />,
     },
      
]);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />);

