# Day 6 of React

## Monolith & Microservices

**Monolith**: architecture is a traditional approach to designing software where an entire application is built as a single, indivisible unit. In this architecture, all the different components of the application, such as the user interface, business logic, and data access layer, are tightly integrated and deployed together.

**Microservices**: architecture, an application is built as a collection of small, independent services, each representing a specific business capability. These services are loosely coupled and communicate with each other over a network, often using lightweight protocols like HTTP or messaging queues.

> Separation of concerns

> Single responsibility principle: Each service has it's own job.

How do these services interact with each other?

Each application run in their own separate ports in same domain name.

Two approaches to fetch data from backend

1. As app loads -> API fetch call may take 500ms -> When is fetched, after 500ms -> UI renders

2. As app loads -> we render the skeleton of UI -> then fetch data -> then render.

In React, we will always use 2nd approach. Because user will not have to wait till the data is fetched. User will have a good experience. UI/UX (User Interface/ User Experience). After rendering the page, the fetched data is loaded.

React has the render cycle very fast.

# useEffect

useEffect is a React Hook that lets you synchronize a component with an external system.

It has arguments:

1. Call Back Function
2. Dependency

```js
useEffect(() => {
  console.log("useEffect called");
}, []);
```

In this code which `console.log()` will be printed first

```js
useEffect(() => {
  console.log("useEffect called");
}, []);

console.log("rendered");
```

Ironically, `rendered` is printed to console first. Call back function in `useEffect()` is called after render is complete.

So after the render, in useEffect() we can have a logic of fetching API data. The fetched data is rendered.

## CORS

When trying to fetch the data from swiggy's official API link. We are getting error that we can't access the API data as per the CORS policy.

**NOTE**
Use the Chrome extension [Allow Cors](https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf "Allow Cors chrome extension").
Update the settings to enable cors.
Access-Control-Access-Headers should be turned ON.
Access-Control-Access-Origin should be \*

## Shimmer

A shimmer UI is a kind of the user interface that mimics the shades and forms of content that will ultimately appear instead of having any actual content.

Here we are using mockData.js to load the cards. But this isn't the best way. So we have to give empty array to useState hook in this way `useState([])`. Since we added setListOfRestaurants() method change the state and load the cards directly from the Swiggy API. `fetchAPI()` method will fetch the data and and return the essential data.

In the time of fetching the data from API, it takes time. We can show a `<h1>Loading...</h1>` when the data is still not fetched. This is not a good industry practice.

Hence we use Shimmer which mimics the cards form instead of actual content. This gives a better experience.

Conditional Rendering: Render a Component based on the conditon

```js
if (listOfRestaurants.length === 0) {
  return <Shimmer />;
}
```

We can also use ternary operator for conditional render. So based on the condition either `<Loading/>` is loaded or `<Component/>`.

```js
return (condition) ? <Loading/> : <Component/>;
```

>Ever wonder how can a state variable which is defined as const can change it's value?

The const value is never reassigned to another variable. If you use let then the value can be changed.

In React, "const" keyword are used more likely to create a react state in ideal way and also to warn developers to reset the memory location of the state to re-render and reflect the changes in page.

Here in below code, we are changing the state of `btnName` using setBtnName() method. When we click the button, only the button will change and other elements in `Header` Component doesn't change.

```js
//Header.js
<button
  className="login"
  onClick={() => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
    console.log(btnName);
  }}
>
```

