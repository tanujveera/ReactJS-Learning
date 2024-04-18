import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is Namsthe react About component</h2>
      <User name={"Tanuj Veera (Funtional)"} />
      <UserClass name={"Tanuj Veera (Class)"}/>
    </div>
  );
};

export default About;
