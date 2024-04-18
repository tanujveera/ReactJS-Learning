import React from "react";

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

export default UserClass;
