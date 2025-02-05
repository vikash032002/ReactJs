import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory=({data , showItem , setShowIndex})=>{
    
    // const [showItem , setShowItem]=useState(false);

    const handleClick=()=>{
        setShowIndex();
        // setShowItem(!showItem);
    }

    // console.log(data);
    return(
        
       
           <div className="w-6/12 mx-auto bg-gray-100 shadow-lg p-4 my-3 ">
             <div className=" flex justify-between cursor-pointer"
             
             onClick={handleClick}

             >
                <span className="font-bold">
                {data.title} ({data.itemCards.length})
            </span>
            <span> {showItem ? "⬆️" : "⬇️"}</span>
            </div>
            {/* Accordin */}
            {showItem && <ItemList  items={data.itemCards} />}
             
           </div>
   
    );
};

export default ResCategory;