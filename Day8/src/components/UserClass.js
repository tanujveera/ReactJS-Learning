import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log("Child Constructor");
    console.log(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount(){
    console.log("child Component did mount");
  }

  render() {
    const { name, location, contact } = this.props;
    const { count } = this.state;

    console.log("Child Render");
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
      </div>
    );
  }
}

export default UserClass;
