import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body=()=>{
    
    const [listOfResturant,setListOfResturant]=useState(/*resList*/[]);
// for getting the filter data 
    const [filterRes,setFilterRes]=useState([]);

    const [searchText,setSearchText]=useState("");

// fetch live data through swiggy api
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async ()=>{
        const data=await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0599002&lng=80.205084&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json1=await data.json();
        const {restaurants}=json1?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle;
        console.log(json1.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setListOfResturant(restaurants);
        setFilterRes(restaurants);
    }
    // shimmer Ui
    if(listOfResturant==0){
        return <Shimmer />
    }
     return(
          <div className="body">
               <div className="fillter">
                <input type="text" className="search-bar" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button className="search-btn"
                onClick={()=>{
                    // filter the restaurant card and update the ui
                    const filterRestaurant=listOfResturant.filter(
                    (res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilterRes(filterRestaurant);
                    console.log(searchText);
                }}>
                    Search
                    </button>
                <button className="filter-btn" 
                onClick={()=>{
                    const fillter=listOfResturant.filter(
                        (res)=>res.info.avgRating>4.1
                    );
                    setFilterRes(fillter);
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
                        setFilterRes(pizza);
                       }
                    }
                >
                    Pizza
                </button>
                </div>
               <div className="res-container">
                    {
                         filterRes.map((restaurant)=>(<Link key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}>
                            <ResturantCard  resData={restaurant}/>
                            </Link>))
                    }
                    {/* <ResturantCard resData={resList[0]}  />
                    <ResturantCard resData={resList[1]}  />
                    <ResturantCard resData={resList[2]}  />
                    <ResturantCard resData={resList[3]}  /> */}
               </div>
              const 
          </div>
     )
};

export default Body;