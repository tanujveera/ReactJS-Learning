import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state={
      count:0,
      count2:1
    }
  }
  render() {
    const {name, location,contact} = this.props;
    const{count} = this.state;
    const{count2} = this.state;
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
}

export default UserClass;
