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
      count:0
    }
  }
```

In `render()` method we can use this state variable using `this.state.count`

```js
  render() {
    return (
      <div className="user-card">
        <h1>Count : {this.state.count}</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h3>Contact: {this.props.contact}</h3>
      </div>
    );
  }
```
