# Day 7 of React

# Routing in React

## useEffect Hook

useEffect Hook is called every time a component is rendered. Usually it is used for clean up process.

```js
const [stateVar, setStateVar] = useState([]);
useEffect(()=>{
  console.log("useEffect Rendered")
},[stateVar]);
```

useEffect(callback fn, dependency array)

Callback function is mandatory. If there are no dependency array, then it renders for every re-render the component undergoes. 

If there is a state variable in dependency array, then whenever the state of that variable changes then useEffect will be called. Dependency array can be any state variable (useState([])). 

>Even if there is a dependency array, at the initial render useEffect will run once. Then later whenever the state variable changes only then useEffect is called.

useEffect should always called at the top level of your component.

**NOTE** Never ever create useState Hook outside the component. Don't create useState Hooks in Conditional statements like `if else`.

## Routing

Using npm, install `react-router-dom`
```sh
npm install react-router-dom
```

So react-router-dom enables client side routing. Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.

This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.

Add configuration in App.js

```js
import {createBrowserRouter} from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
  },{
    path:"/about",
    element:<About/>,
  },
]);
```

Here we declare the client side routing by specifying the path and also the component to be loaded when a specific route is requested by browser/user.

createBrowserRouter([]) is used to create and specify the routes.

```js
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
```

This RouterProvider will provide the component to render