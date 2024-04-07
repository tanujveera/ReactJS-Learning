# Day 5 of React

# Swiggy Structure

- Header
- - Logo
- - Nav Bar
- Body
- - Search
- - Restaurant Container
- Card
- - Img
- - Name of Res, stars, rating, cuisine, delivery time
- Footer
- - Copyright
- - Links
- - Address
- - Contact

There is a conventional way in industry to keep React code in 'src' source folder.

Usually, each component are written in separate files.

There are two types of exports:

1. Named Exports: It can export multiple functions, variables

```js
//Named Export
// name.js
// use export for every export variable or function
export const name = "Tanuj Veera";
export const gender = "Male";

//or use export in this way
const name = "Tanuj Veera";
const gender = "Male";

export { name, gender };

//Importing Named Export
// user.js
// Named export will always import using {}
import { name, gender } from "./user.js";
```

2. Default Exports: It can only export a single object (function or variable).

```js
//Default Export
// name.js
const name = "Tanuj Veera";
export default name;

//Importing Default Export
// user.js
import name from "./user.js";
```

# React Hooks

> Hooks let you use different React features from your components. You can either use the built-in Hooks or combine them to build your own.

> There are normal JavaScript utility functions

There are 2 important hooks:

- useState()
- useEffect()

**NOTE** There are other React Hooks. check out at [React Hooks](https://react.dev/reference/react/hooks "React Hooks Docs")

## useState()

It lets you add a `state variable` to your component

useState is called on top level of your component to declare state variable. useState(initialValue)

```js
const [listOfRestaurants, setListOfRestaurants] = useState(0);
```

> Whenever a state variable updates React re-renders the component.

We should never change the variable using the variable itself, in this case "listOfRestaurants".

Instead we should always change the state variable using setListOfRestaurants(). This method is used to change the state variable.

**NOTE**: We can use any naming convention to these state variables. But it is good practice to use this convention which is widely used across the industry. `[stateVar, setVariable]`

## Reconciliation Algorithm

Reconciliation Algorithm also known as `React Fiber` introduced in React 16

![Reconciliation Algorithm](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fxjqsuome198owgamcgr3.jpeg "Reconciliation Algorithm")

Lets say there are many many React components loaded in DOM. Whenever there is a change in the components, React re-renders. From above image let's say, only green ones are rendered by React, then the virtual DOM should be updated.

**Virtual DOM**: is a memory representation or blue print of the actual DOM. In React, this is just a object. (try console.log(component), it returns a React object).

**Actual DOM**: is the actual structure of the webpage. It is the original `<html>, <div>, <img>` tags (in simpler words).

**DOM**: represents the web page often called a document with a logical tree and each branch of the tree ends in a node and each node contains objects.

>React updates the state changes in Virtual DOM first and then it syncs with actual DOM.

>Virtual DOM makes the performance faster not because of faster processing but rather than wasting time on updating the entire page, you can dissect it into small elements and interactions.

>Reconciliation Algorithm finds the difference between the virtual DOM and actual DOM