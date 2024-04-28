import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { useEffect } from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log("parent Component did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is react About component</h2>
        <div>
          <UserContext.Consumer>
            {({loggedInUser})=> <h2 className="font-bold">{loggedInUser}</h2>} 
          </UserContext.Consumer>
        </div>
        <UserClass
          name={"Tanuj Veera (Class)"}
          location={"Hyderabad"}
          contact={"@tanujveera"}
        />
      </div>
    );
  }
}

// const About = () => {
//   useEffect(() => {
//     // let timer = setInterval(() => {
//     //   console.log("setInterval");
//     // }, 1000);
//     console.log("About useEffect");
//     // return () => {
//     //   console.log("About return");
//     //   clearInterval(timer)
//     // };
//   }, []);
//   console.log("Rendered");
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is react About component</h2>
//       <UserClass
//         name={"Tanuj Veera (Class)"}
//         location={"Hyderabad"}
//         contact={"@tanujveera"}
//       />
//     </div>
//   );
// };

export default About;
