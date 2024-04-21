# Day 8 of React

# Class Based Components

Functional Components are new way of writing code in React. Class based components are old way of writing React code.

A class based component is Javascript Class which extends React Component class.

```js
class UserClass extends React.Component {
  render() {
    return;
  }
}
```

Class based components have `render()` method which returns JSX.

If we want to pass props to the Class components, we send the props to the constructor of the class.

`super(props)` is mandatory.

```js
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    console.log(this.props);
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name: {props.name}</h2>
        <h3>Location: Dehradun</h3>
        <h3>Contact: @tanujveera</h3>
      </div>
    );
  }
}
```

> As `UserClass` extends `React.Component` with the `super()` method. A component that extends `React.Component` must call the `super()` constructor in the derived class since it’s required to access this context inside the derived class constructor.

> It refers to the constructor of the parent class that is being extended in the current class. The purpose of using the super constructor with a props argument is to inherit the properties of the parent class and also pass in additional properties as arguments to the child class.

Loading a class based components means creating an instance of the class. When ever a class instance is created, the constructor is called. So, the constructor is the best place to receive props and create state variables.

In constructor, we define the state using the reserved keyword `state`

```js
constructor(props) {
  super(props);
  console.log(props);
  this.state={
    count:0,
    count2:1
  }
}
```

In `render()` method we can use this state variable using `this.state.count`

```js
render() {
  const {name, location,contact} = this.props;
  const{count,count2} = this.state;
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h3>Contact: {contact}</h3>
    </div>
  );
}
```

To update the state variable in class components, we have to use `setState({})` and we pass an JSON object which sets the state variable.

```js
<button
  onClick={() => {
    this.setState({
      count: this.state.count + 1,
      count2: this.state.count + 1,
    });
  }}
>
  Count Increase
</button>
```

We don't have to use `setState({})` method every time for each state variable. we can populate all those in a single `setState({})` method.

About component is parent component, UserClass component is child class based component. When parent component renders, it finds the child component and it loads it as will. Here in child component, a new `instance` is created and `constructor` is called, then `render()` is called.

Just like `render()` method, there are many lifecycle functions.

`componentDidMount()` will run when the component is completely mounted into the DOM.

```js
componentDidMount(){
 console.log("child Component did mount");
}
```

When a component is loaded, they are loaded in this order

Parent Constructor -> Parent Render -> Child Constructor -> Child Render -> Child componentDidMount() -> Parent componentDidMount()

Child is mounted first, then parent is mounted into DOM.

`componentDidMount()` is mostly used for API fetch calls. First the page renders, then API is fetched and rendered accordingly.

To get an understanding of [React Life Cycle Components](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/ "React Life Cycle")