import React from "react"
import  ReactDOM  from "react-dom/client";

const htag = React.createElement("h1",{},"H1 Tag");
const htag2 =React.createElement("h2",{},"H2 Tag");
const child = React.createElement("div",{id:"child"},[htag,htag2]);
const parent = React.createElement("div",{id:"parent"},[child,child]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
