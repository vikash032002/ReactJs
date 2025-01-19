import ResturantCard from "./ResturantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body=()=>{
    
    const [listOfResturant,setListOfResturant]=useState(resList);

     return(
          <div className="body">
               <div className="fillter">
                <button className="filter-btn" 
                onClick={()=>{
                    const fillter=listOfResturant.filter(
                        (res)=>res.info.avgRating>4.1
                    );
                    setListOfResturant(fillter);
                    console.log(fillter);
                }}>
                    Top Rated Resturant
                </button>
                <button className="pizza"
                    onClick={()=>
                       {
                         const pizza=listOfResturant.filter(
                            (res)=>res.info.cuisines.includes("Pizzas")
                        );
                        console.log(pizza);
                        setListOfResturant(pizza);
                       }
                    }
                >
                    Pizza
                </button>
                </div>
               <div className="res-container">
                    {
                         listOfResturant.map((restaurant)=>(<ResturantCard key={restaurant.info.id} resData={restaurant}/>))
                    }
                    {/* <ResturantCard resData={resList[0]}  />
                    <ResturantCard resData={resList[1]}  />
                    <ResturantCard resData={resList[2]}  />
                    <ResturantCard resData={resList[3]}  /> */}
               </div>
          </div>
     )
};

export default Body;