import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("parent Component did mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namsthe react About component</h2>
        <UserClass
          name={"Tanuj Veera (Class)"}
          location={"Hyderabad"}
          contact={"@tanujveera"}
        />
        <UserClass
          name={"Elon Musk (Class)"}
          location={"Hyderabad"}
          contact={"@tanujveera"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namsthe react About component</h2>
//       <UserClass
//         name={"Tanuj Veera (Class)"}
//         location={"Hyderabad"}
//         contact={"@tanujveera"}
//       />
//     </div>
//   );
// };

export default About;
