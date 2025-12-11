import React from "react";
import { createRoot } from "react-dom/client";

//JSX => Raect.createElement => Object => HTML(DOM)

//Below is the React element
const Title = () => (
  <h1 id="titel" key="h1">
    Food Villa
  </h1>
);



//React Component
// Functional Component
const HeaderComponent = () => {
  return (
    <div>
      {/* Component Composition */}
      {<Title />}  
      <h2>Namste React Functional Component</h2>
      <h2>This is an H2 tag</h2>
    </div>
  );
};



const root = createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);



// JavaScript Code :  Manipulating the HTML DOM using Javscript
/*
const heading = document.createElement("h1");
heading.innerHTML = "Hello World from JavaScript!"
const root = document.getElementById("root");
root.appendChild(heading);
*/

// React Code : Manipulating the HTML DOM using React
/*
const heading = React.createElement("h1", {}, "Hello World from React!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

// creating Nested React Elements Object: Here h1 is an React Object not HTML Element
/*
const heading = React.createElement(
    "h1", 
    { id: "heading", xyz: "abc" }, 
    "Hello World from React!"
);

// Creating root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing React Element(object h1) inside root
root.render(heading);
*/

// creating Nested React Elements Object
/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am an h1 tag</h1>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
/*
const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    React.createElement(
        "div",
        { id: "child" },
        React.createElement(
            "h1",
            {},
            "I am an h1 tag"
        )
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

/*
const App = () => {
  return React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      React.createElement("h1", {}, "I am an h1 tag")
    )
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App());
*/

// creating Sibling React Elements Object
/**
 * <div id="parent">
 *   <div id="child">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
/*
const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    React.createElement(
        "div",
        { id: "child" },
        [
            React.createElement(
                "h1",
                {},
                "I am an h1 tag"
            ),
            React.createElement(
                "h2",
                {},
                "I am an h2 tag"
            ),
        ]
    )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

// creating Sibling React Elements Object
/**
 * <div id="parent">
 *   <div id="child1">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
/*
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
*/

// creating Sibling React Elements Object
/**
 * <div id="parent" style="background: skyblue;">
 *   <div id="child1">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 *   <div id="child2">
 *     <h1>I am an h1 tag</h1>
 *     <h2>I am an h2 tag</h2>
 *   </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
