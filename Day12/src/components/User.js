import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <button onClick={()=>{
          
        }}>Count Increase</button>
      <h2>Name: {props.name}</h2>
      <h3>Location: {props.location}</h3>
      <h3>Contact: {props.contact}</h3>
    </div>
  );
};

export default User;
