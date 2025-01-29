import { useState } from "react";
const UserFunction=({name})=>{

    const[count]=useState(0);

    return(
        <div className="user-data">
            <h5>Name:{name}</h5>
            <p>Count:{count}</p>
            <h6>Location:Ahemdabad</h6>
            <h6>Insta:@puchu</h6>
        </div>
    )
};

export default UserFunction;