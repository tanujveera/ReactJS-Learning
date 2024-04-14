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