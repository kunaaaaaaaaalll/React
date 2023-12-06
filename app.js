import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement('h1', {id: 'heading'}, 'Hello World from React!');

// JSX => (JSX converts into BABEL)
const jsxHeading = <h1 id="heading">Hello JSX</h1>;

// Functional Components

const HeadingComponent = () => (<h1 id = "heading">First Functional Component using BABEL</h1>);

console.log("ReactElement", heading);
console.log("JSX", jsxHeading);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>); // syntax which babel understands... 
