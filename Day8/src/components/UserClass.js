import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      userInfo:{
        login: "Username",
        location: "Default Location",
        created_at:"created",
        avatar_url:"https://avatars.githubusercontent.com/u/68957796?v=4"
      }
    }
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/tanujveera");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo:json,
    });

  }

  render() {
    // const { name, location, contact } = this.props;
    // const { count } = this.state;
    const { login, location, created_at } = this.state.userInfo;
    console.log(login +" "+location +" "+created_at);
    return (
      <div className="user-card">
        {/* <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <h2>Name: {login}</h2>
        <h3>Location: {location}</h3>
        <h3>Created on: {created_at}</h3>
      </div>
    );
  }
}

export default UserClass;
