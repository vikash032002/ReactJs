import { CON_URL } from "../utils/constants";

const ResturantCard = (props) =>{
     const {resData} = props;

     const {cloudinaryImageId , cuisines , avgRating , name , costForTwo }= resData?.info ;
     
     return(
         <div className="w-[250px] m-2 p-4 bg-gray-200 border border-black rounded-lg shadow-md flex flex-col h-full">
  {/* Image */}
  <img 
    className="w-full h-40 object-cover rounded-md" 
    src={CON_URL + resData.info.cloudinaryImageId} 
    alt="Food Image" 
  />

  {/* Restaurant Info */}
  <div className="flex-grow text-center p-2">
    <h3 className="text-lg font-semibold">{name}</h3>
    <h4 className="text-gray-600 text-sm">{cuisines.join(", ")}</h4>
    <h4 className="text-yellow-500 font-medium">{avgRating} ⭐</h4>
    <h4 className="text-green-600 font-semibold">{costForTwo}</h4>
  </div>

  {/* Footer (Optional) */}
  <div className="mt-auto text-center">
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Order Now</button>
  </div>
</div>

     )
};

export default ResturantCard;