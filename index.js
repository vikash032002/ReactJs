import React from "react";
import ReactDOM from "react-dom/client";

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
     

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render([heading,<HeadingComponent />]);

