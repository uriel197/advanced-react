import React, { useState, useEffect } from "react";

// cleanup function  /* 1 */
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    console.log("window resized once");
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("window being resized");
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <>
      <h1>Window Size</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;

/************ COMMENTS ************

***1: setting up a window.innerWidth event listener or a similar function inside a useEffect will run the callback function every time the window width changes. Depending on what you do in that callback function, it could potentially be resource-intensive.

To address concerns about performance, consider the following, Cleanup:
Ensure that you remove the event listener when the component unmounts to avoid potential memory leaks. The useEffect cleanup function is suitable for this purpose.

Note: In React's useEffect hook, the primary purpose of the return statement inside the effect function (not the callback) is to specify a cleanup function. This cleanup function is executed when the component is unmounted or when the dependencies specified in the dependency array change. The cleanup function allows you to perform necessary cleanup tasks, such as unsubscribing from external subscriptions, cancelling network requests, or clearing up resources.
Having a return statement inside useEffect is a powerful feature to manage resource cleanup and avoid memory leaks in your React components. Always remember to include cleanup logic when dealing with side effects to maintain a clean and efficient application.
note that if you choose to omit the return inside useEffect() the event listener will fire everytime the state changes and it will be too costly for performance.

*/
