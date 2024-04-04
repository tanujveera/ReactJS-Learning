# Day 4 of React

## Always plan for the project. Create a visual replica of the project you want to create.

---

```js
const styleCard = {
  backgroundColor: "red",
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={styleCard}>
      <h3>Megahana Foods</h3>
    </div>
  );
};
```

---

> We can also declare css styles using javaScript styles.

> JSX syntax: `style={styleCard}`

```js
style={{ backgroundColor:"red",}}
```

> First curly braces are to tell that we are using JS and second curly braces are JS object

> props(Properties): We can send props into a functional component. They are parameters sent to a function. sending a prop to functional component

```js
const ResCard = (obj)=>{
  return (<div>{obj.resName}</div>
    <div>{obj.Cuisine}</div>)
}

const Body = () => {
  <ResCard resName="Sagar Restro", Cuisine="Indian"/>
}
```

## Props

> Functional Components in JSX are JavaScript functions. Props are arguments passed on to the Functional Component.

Here in Body, resName and cuisine are called props. These props are sent as objects to functional component.

> Destructuring in JS: The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. (Read More about this)

```js
//Destructuring on the fly
const ResCard = ({resName,Cuisine})=>{
  return (<div>{obj.resName}</div>
    <div>{obj.Cuisine}</div>)
}

const ResCard = (props)=>{
  //Destructuring
  const {resName,Cuisine} = props;
  return (<div>{resName}</div>
    <div>{Cuisine}</div>)
}

const Body = () => {
  <ResCard resName="Sagar Restro", Cuisine="Indian"/>
}
```

This is Destructuring in JS

> Config Driven UI: Website is driven by Config files. We get a JSON data from backend with all the info needed for frontend to display. We parse the info and map them with UI elements.

---

**NOTE**
The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

---

> Every Component prop should have a "key" prop

```js
<div className="res-container">
  {resList.map((restaurant) => (
    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
  ))}
</div>
```

We can use the key, the id given in the config file (json) or we can use the javascript map's function index argument

```js
<div className="res-container">
  {resList.map((restaurant, index) => (
    <RestaurantCard key={index} resData={restaurant} />
  ))}
</div>
```

The above method to use map's index isn't recommended
Every prop should have a unique key which should be given from backend json config data

---
