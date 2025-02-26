import ResturantCard,{withPromotedLabel} from "./ResturantCard";
import { useEffect, useState ,useContext } from "react";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body=()=>{
    
    const{loggedInUser,setUserName}=useContext(UserContext);

    const [listOfResturant,setListOfResturant]=useState(/*resList*/[]);
    const RestaurantCardPromoted=withPromotedLabel(ResturantCard);
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
    // online status checking
    const onlineStatus=useOnlineStatus();
    if(onlineStatus==false){
        return <h1>Looks! Like you are Offline PuchuPie</h1>
    };
    // shimmer Ui
    if(listOfResturant==0){
        return <Shimmer />
    }
     return(
          <div className="bg-orange-300">
               <div className="p-[10px]">
                <input type="text" className="border-pink-950 border-1 h-8 mr-2 rounded-sm bg-amber-100" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button 
                data-testid="searchId"
                className="btn-primary w-20"
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
                <button className="btn-primary" 
                onClick={()=>{
                    const fillter=listOfResturant.filter(
                        (res)=>res.info.avgRating>4.1
                    );
                    setFilterRes(fillter);
                    console.log(fillter);
                }}>
                    Top Rated Resturant
                </button>
                <button className="btn-primary w-20"
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

                <label>UserName</label>
                <input className="border-2 bg-amber-100 p-1.5" 
                value={loggedInUser}
                onChange={(e)=>setUserName(e.target.value)}></input>
                </div>
               <div className="flex flex-wrap gap-5 justify-center">
                    {
                         filterRes.map((restaurant)=>(<Link key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}>
                           {
                            restaurant.info.isOpen?<RestaurantCardPromoted resData={restaurant}/>:<ResturantCard  resData={restaurant}/>
                           } 
                            </Link>))
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