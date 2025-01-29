import { useEffect , useState} from "react";



const RestaurantMenu=()=>{

    const[resInfo , setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

const fetchMenu=async ()=>{
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=609737&catalog_qa=undefined&submitAction=ENTER");

    const json=await data.json();
    setResInfo(json.data);
    console.log(json.data);
    console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    
}

const {name , costForTwoMessage , cuisines}=resInfo?.cards[2]?.card?.card?.info;
const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ;
console.log(itemCards);

    return(
        <div>
            <h1>
                {/* {name} */}
            </h1>
            {/* <p>{costForTwoMessage} - {cuisines.join(",")}</p> */}
            <h2>Menu</h2>
            <h4>
                {/* <li>{itemCards[0]?.card.info.name}</li> */}
                <li>Pizza</li>
                <li>Briyani</li>
            </h4>
        </div>
    )
};

// export default RestaurantMenu;