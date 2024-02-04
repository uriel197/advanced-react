import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter  /* 1 */

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Hello world");
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
  });
  useEffect(() => {
    console.log("will render only once");
  }, []);
  useEffect(() => {
    console.log("will render ...");
  }, [value]);

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
    </>
  );
};

export default UseEffectBasics;

/************ COMMENTS *************

***1: The useEffect hook in React is used for handling side effects in functional components. Side effects can include things like data fetching, subscriptions, manually changing the DOM, and more. The useEffect hook takes a function as its argument, and this function will be executed after the component has been rendered.

Here's an explanation of the useEffect hooks in our example:

First useEffect - No Dependency Array:

useEffect(() => {
  console.log("Hello world");
  if (value > 0) {
    document.title = `New Messages(${value})`;
  }
});

This useEffect runs after every render. It logs "Hello world" to the console and updates the document title with the current value if it's greater than 0. Since there is no dependency array, it will run on every render.

Second useEffect - Empty Dependency Array:

useEffect(() => {
  console.log("will render only once");
}, []);

This useEffect runs only once after the initial render (componentDidMount). The empty dependency array [] indicates that it has no dependencies, so it won't run again unless the component is unmounted and then remounted.

Third useEffect - Dependency on value:

useEffect(() => {
  console.log("will render ...");
}, [value]);

This useEffect runs whenever the value variable changes. It logs "will render..." to the console. This is useful for handling side effects that depend on specific values in your component state. It helps in avoiding unnecessary executions when other state or props change.
It's important to use useEffect wisely to avoid unnecessary computations and ensure your component behaves correctly in different scenarios.
*/
