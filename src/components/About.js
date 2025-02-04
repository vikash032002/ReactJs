import UserClass from "./UserClass";
import UserFunction from "./UserFunction";

const About=()=>{
    return (
        <div>
            <h1 >
                About us 
                <UserFunction name={"Puchu Function"} />
                <UserClass name={"Puchu Class"} />
                <UserClass name={"Vicku Class"} />
            </h1>
        </div>
    )
};

export default About;