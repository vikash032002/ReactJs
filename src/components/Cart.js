import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{

    const dispatch = useDispatch();

    const handleClearCart=()=>{
        dispatch(clearCart());
    };

    const cartItem=useSelector((store)=>store.cart.items);
    return(
        <div>
            <div className=" text-center m-4 p-4">
            <h1 >Cart</h1>
            <button className=" bg-amber-400 rounded-sm p-2 m-2"
            onClick={handleClearCart}>Clear Cart</button>
            {cartItem.length==0 && <h1>Cart is Empty . Add items</h1>}
              </div>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItem} />
            </div>
       
        </div>
    )
};

export default Cart;