import { CON_URL } from "../utils/constants";

const ResturantCard = (props) =>{
     const {resData} = props;

     const {cloudinaryImageId , cuisines , avgRating , name , costForTwo }= resData?.info ;
     
     return(
          <div className="res-card">
          <img className="res-logo" src={CON_URL+resData.info.cloudinaryImageId} />
               <h3>{name}</h3>
               <h4>{cuisines.join(" ,")}</h4>
               <h4>{avgRating} star</h4>
               <h4>{costForTwo}</h4>
          </div>
     )
};

export default ResturantCard;