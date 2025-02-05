import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component{

    constructor(props){
        super(props);

        // useState Hooks
        // this.state={
        //     count: 0,
        // };
        // console.log("Constructor"+this.props.name);
        this.state={
            userInfo:{},
        };
    }

    async componentDidMount(){
        const data= await fetch("https://api.github.com/users/vikash032002");
        const json= await data.json();
        console.log(json);
        this.setState({
            userInfo:json,
        })
        // console.log("child Mount"+this.props.name);
    }

    componentDidUpdate(){
        // console.log("component did update");
    };

    componentWillUnmount(){
        // console.log("component will unmount");
    };
    render(){

        // const {loggedInUser}=useContext(UserContext);
        const {name,login}=this.state.userInfo;
        // console.log("render"+this.props.name);
        return(
        <div className="border-2 border-amber-600 p-[5px] bg-amber-300">
            {/* Context in react */}
            <UserContext.Consumer>
                {({loggedInUser})=><h5>User: {loggedInUser}</h5>}
            </UserContext.Consumer>
            <h5>Name:{name}</h5>
            <h5>LoginId:{login}</h5>
            {/* <h5>Name:{this.props.name}</h5>
            <p>Count:{this.state.count}</p>
            <button onClick={()=>{
                this.setState(
                    {
                    count:this.state.count+1,
                }
                );
            }
            }>
                count Increase
            </button>
            <h6>Location:Ahemdabad</h6>
            <h6>Insta:@puchu</h6> */}
        </div>
    );
    }
};

export default UserClass;