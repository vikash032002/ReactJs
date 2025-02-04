import { useState } from "react";
const UserFunction=({name})=>{

    const[count,setCount]=useState(0);

    return(
        <div className="border-2 border-amber-600 p-[5px] bg-amber-300">
            <h5>Name:{name}</h5>
            <p>Count:{count}</p>
            <button onClick={()=>
                setCount(count+1)
            }>
                count Increase
            </button>
            <h6>Location:Ahemdabad</h6>
            <h6>Insta:@puchu</h6>
        </div>
    )
};

export default UserFunction;