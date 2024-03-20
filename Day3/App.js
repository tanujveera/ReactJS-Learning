import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => object => When rendered it becomes HTML element
//React Object
const heading = React.createElement("h1", { id: "heading" }, "Tanuj Veera😎");

//Using jsx syntax
//Parcel - Babel will transpile before it reaches to JS engine
//Babel is a package which converts the code in React understandable format.
//Babel will transpile the JSX code to JS. A transpiler converts a language into similar level of language. EX: Typescript to Javascript.
//A compiler converts a high level language to low level language that machine understands
//JSX -> React.createElement -> ReactElement - Object -> HTML render
const jsxHeading = (
  <h1 id="heading" taxIndex="0" className="heading">
    Tanuj Veera😎
  </h1>
);

//React Element
const HeadingComponent1 = <h1>React Element</h1>;

//React Component
const TitleComponent = () => {
  return (
    <div>
      <h2>Title Component</h2> {HeadingComponent1}
    </div>
  );
};

// React Component: Class(old) & Functional(new)
const HeadingComponent = () => (
  <div id="container">
    {HeadingComponent1}
    <TitleComponent />
    {TitleComponent()}
    <h1>React Component</h1>
  </div>
);

//Root element is created to render React elements
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
