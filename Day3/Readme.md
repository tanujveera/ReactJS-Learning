## Day 3 of React

> Create a script to run instead of "npx parcel index.html"
> In package.json, in "script object", we can create a script to start project

```js
  "scripts": {
    "start":"parcel index.html",
    "build":"parcel build index.html",
    "test": "jest"
  }
```

> Now since we updated the command. We use the script in Command prompt as:

> Command: `npm run start` or `npm run build`
> Here `npm run` {script name we gave in package.json}

> Shortcut: instead of `npm run start` we can use `npm start`. (Can only be used for start command not build)

---

```js
import React from "react";
import  ReactDOM  from "react-dom/client";

//React.createElement => object => When rendered it becomes HTML element
//React Object
const heading = React.createElement("h1",{id:"heading"},"Tanuj Veera😎");
//Get the root element
const rootDiv = document.getElementById("root");
//Root element is created to render React elements
const root = ReactDOM.createRoot(rootDiv);
// React will render the heading (object to HTML <h1>) into the root element
root.render(heading);
```

---

> It is hard for devs to write above verbose code.
> React Owners created a syntax .jsx
> React can be written in .js -`.jsx` and React is seperate -`.jsx` syntax is just created to make it easy to develop

## Creating element using jsx

```js
//Using jsx syntax
const jsxHeading = <h1>Tanuj Veera😎<h1/>;
```

> Here `<h1>` is not HTML in jsx. It is HTML-like syntax but not HTML

> JavaScript doesn't understand .jsx syntax. It only understands ECMAScript.

Parcel - Babel will transpile before it reaches to JS engine

Babel is a package which transpiles the code in React understandable format and then compiles to JS code which browser understand.

Babel can transpiles JS code to older JS versions to support old browsers.

JSX -> React.createElement -> ReactElement - Object -> HTML render

If you want to give class attribute to HTML element

We use className instead of HTML class

```js
const jsxHeading = <h1 id="heading" className="heading">Tanuj Veera😎</h1>;
```

## React Component

2 types

1. Class Based Component - OLD Way
2. Functional Component - New Way

> React Functional Component is a normal JS Function that returns JSX code

> Component's naming convention is always camel case. Ex: TitleComponent

```js
const HeadingComponent= ()=>{ return <h1>Tanuj Veera</h1>};
```

or

```js
const HeadingComponent= ()=> <h1>Tanuj Veera</h1>;
```

```js
//React Element
const HeadingComponent1=(<h1>React Element</h1>);
```

```js
// React Component: Functional
//with return use {}
const HeadingComponent= ()=>{
return <h1>React Component</h1>
};
```

```js
//Without return use ()
const HeadingComponent= ()=> (<h1>React Component</h1>);
```

> If you want to render using react element
> root.render(HeadingComponent1);

> If we need to render into a root element using functional Component then we use:

```js
root.render(<HeadingComponent/>)
```

---

Component Composition
: Component inside a component

```js
const TitleComponent = () => {return <h2>Title Component</h2>};

const HeadingComponent= ()=>(
  <div id ="container">
    <TitleComponent/>
    <h1>React Component</h1>
 </div>
);
```

---

We can write JS code in JSX code

We can put React Element or React Component

```js
const num = 100;
const TitleComponent1 = ( <h2>Title Component</h2>);// React Element
const TitleComponent = () => {return <h2>Title Component</h2>}; //React Component

const HeadingComponent= ()=>(
  <div id ="container">
    {num+20} //120
    {TitleComponent1} // renders the React Element
    <TitleComponent/> // line 1 renders React Component
    <TitleComponent><TitleComponent/> // similar to line 1
    {TitleComponent()} //Similar to line 1
    <h1>React Component</h1>
 </div>
);
```

> Curly braces { } are special syntax in JSX.
> It is used to evaluate a JavaScript expression during compilation.

> JSX takes care of malicious attacks. It escapes the attack.

> It will sanitize the data. It prevents cross site scripting attacks.
