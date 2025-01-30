import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter,RouterProvider , Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
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
     return(
          <div className="app">
               <Header />
               <Outlet />
          </div>
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
          ],
          errorElement:<Error />,
     },
      
]);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(<RouterProvider router={appRouter} />);

