// const react1=React.createElement("h1",{id:"heading"},"Hello world from React");
// console.log(react1);//object
 

// {/* <div id="parents">
//     <div id="child">
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div>   create this with react*/}

// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//      React.createElement("div",
//         {id:"child"},
//         [React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag")]
//      ));
// const root1=ReactDOM.createRoot(document.getElementById("root"));
// root1.render(parent);

// console.log(parent);

// React element
const heading = <h1>Namste React by JSX</h1>;

// React Functional component(just normal js function)
const Title = () =>(
     <h1>Hello</h1>
);

const HeadingComponent = () =>(
     <div>
        <Title />
        {heading}
        <h1>Namste React by Functional component</h1>
</div> );
     
