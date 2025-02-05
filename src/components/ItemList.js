import { CON_URL } from "../utils/constants";

const ItemList=({items})=>{
    console.log(items);
    return(
        <div className="mt-2">
            <ul>
                {items.map(item=> <div className="m-2 border-b-2 border-b-amber-500 p-1.5" key={item.card.info.id}>
                   <div>
                    <span className="font-bold mr-2">{item.card.info.name}</span>
                    <span className="font-semibold">Rs-{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                   </div>
                   <div className="flex">
                   <p className="w-10/12">{item.card.info.description}</p>
                    <img className="w-24 aspect-square object-cover rounded-md" src={CON_URL+item.card.info.imageId} />
                   </div>
                </div>)}
            </ul>
        </div>
    );
};

export default ItemList;