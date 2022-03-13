import React from "react";
import ReactDOM from "react-dom";

//we can also add inline styling to elements
// ReactDOM.render(<h1 style="color:red">Hello World!</h1>, document.getElementById("root"));

// this would have worked fine if we were in a html file
// we are in JSX file so we add styling through js object
// {key:value} eg {color:"red",height:"100px"}
// and this js object has to be enclosed within {}
// value is always a string enclosed within ""
// and key value pair should be separated by , unlike in css file ;

// inline style property requires a javascript object
// and js object has to be enclosed within {} in .render
// ReactDOM.render(
//   <h1 style={{ color: "red" }}>Hello World!</h1>,
//   document.getElementById("root")
// );

// this can be also done in the following way
const customStyle = {
  color: "red",
  fonstSize: "100px",
  border: "1px solid black"
};

// if we have to change anything in styling with only js object we can do so

customStyle.color = "blue";
ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
