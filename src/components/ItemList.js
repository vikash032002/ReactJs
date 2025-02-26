import { useDispatch } from "react-redux";
import { CON_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList=({items})=>{

    const dispatch=useDispatch();

    const handleAddItem=(item)=>{
        // dispatch an action 

        dispatch(addItems(item));
    }

    // console.log(items);
    return(
        <div className="mt-2">
            <ul>
                {items.map(item=> <div data-testid="foodItem" className="m-2 border-b-2 border-b-amber-500 p-1.5" key={item.card.info.id}>
                   <div>
                    <span className="font-bold mr-2">{item.card.info.name}</span>
                    <span className="font-semibold">Rs-{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                   </div>
                   <div className="flex">
                   <p className="w-10/12">{item.card.info.description}</p>
                    <div >
                        <button
                        onClick={()=>handleAddItem(item)}
                        className="absolute border-red-400 border-2 bg-amber-400 rounded-sm m-1.5 ml-3">Add+</button>
                        <img className="w-24 aspect-square object-cover rounded-md" src={CON_URL+item.card.info.imageId} />
                    </div>
                   </div>
                </div>)}
            </ul>
        </div>
    );
};

export default ItemList;