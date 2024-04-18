# Day 8 of React

# Class Based Components

Functional Components are new way of writing code in React. Class based components are old way of writing React code.

A class based component is Javascript Class which extends React Component class.

```js
class UserClass extends React.Component {
    render(){
    return 
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
    console.log(props);
  }
  render() {
    return (
      <div className="user-card">
        <h2>Name: Tanuj Veera</h2>
        <h3>Location: Dehradun</h3>
        <h3>Contact: @tanujveera</h3>
      </div>
    );
  }
}
```

>As `UserClass` extends `React.Component` with the `super()` method. A component that extends `React.Component` must call the `super()` constructor in the derived class since it’s required to access this context inside the derived class constructor.