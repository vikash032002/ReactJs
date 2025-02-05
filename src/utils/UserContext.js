import { createContext } from "react";

const UserContext=createContext({
    loggedInUser:"Default User"
});

// const UserContext=()=>{
//     return(

//     );
// }

export default UserContext;