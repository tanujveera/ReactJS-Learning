## Always plan for the project. Create a visual replica of the project you want to create.

---

```
const styleCard={
  backgroundColor:"red",
};

const RestaurantCard = () =>{
  return (
    <div className="res-card" style={styleCard}>
      <h3>Megahana Foods</h3>
    </div>
  )
}
```

---

> We can also declare css styles using javaScript styles.

> JSX syntax: `style={styleCard}`

```
style={{ backgroundColor:"red",}}
```

> First curly braces are to tell that we are using JS and second curly braces are JS object

> props(Properties): We can send props into a functional component. They are parameters sent to a function. sending a prop to functional component

```
const ResCard = (obj)=>{
  return (<div>{obj.resName}</div>
    <div>{obj.Cuisine}</div>)
}

const Body = () => {
  <ResCard resName="Sagar Restro", Cuisine="Indian"/>
}
```

Here in Body, resName and cuisine are called props. These props are sent as objects to functional component.

> Destructuring in JS: The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. (Read More about this)

```
//Destructuring on the fly
const ResCard = ({resNamem,Cuisine})=>{
  return (<div>{obj.resName}</div>
    <div>{obj.Cuisine}</div>)
}

const ResCard = (props)=>{
  //Destructuring
  const {resNamem,Cuisine} = props;
  return (<div>{resName}</div>
    <div>{Cuisine}</div>)
}

const Body = () => {
  <ResCard resName="Sagar Restro", Cuisine="Indian"/>
}
```

This is Destructuring in JS

> Config Driven UI: Website is driven by Config files. We get a JSON data from backend with all the info needed for frontend to display. we parse the info and map them with UI elements.

---

**NOTE**
The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

---
