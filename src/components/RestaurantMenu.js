import {  useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null); // Initialize with null

  const {resId} =useParams();

  const resInfo=useRestaurantMenu(resId);

  // control component
  const[showIndex , setShowIndex]=useState(null);

//   useEffect(()=>{
//         fetchMenu();
//     },[]);

// const fetchMenu=async ()=>{
//     const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");

//     const json=await data.json();
//     setResInfo(json.data);
//     console.log(json.data);
//     console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    
// }

  // If data is still loading, show a loading message
  if (!resInfo) {
    return <h1>Loading...</h1>;
  }

  // Safely extract data using optional chaining (?.)
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards ||
    [];

 const itemCards1 =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards ||
    [];

    // console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") );

  const categories= resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") ;

  return (
    <div>
      <div className="text-center">
        <h1 className="font-extrabold" >{name || "Restaurant"}</h1>
      <h3 >{costForTwoMessage || "N/A"}</h3>
      <h3 >{cuisines ? cuisines.join(", ") : "N/A"}</h3>
      </div>

      <div>
        <h2 className="text-center font-bold border-2 border-fuchsia-300 m-1.5" >Menu</h2>
      </div>

    {
      categories.map((category, index)=> <ResCategory 
      
      key={categories.categoryId} data={category?.card?.card}
      
      showItem={index== showIndex?true:false}

    setShowIndex={() => setShowIndex(showIndex === index ? null : index)}

      
      />)
    }

      {/* <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item, index) => (
            <li key={index}>{item?.card?.info?.name || "Unnamed Item"}</li>
          ))
        ) : (
           itemCards1.map((item, index) => (
            <li key={index}>{item?.card?.info?.name || "Unnamed Item"}</li>
          ))
        )}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
