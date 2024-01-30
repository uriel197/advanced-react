import React, { useState } from "react";

const UseStateBasics = () => {
  /* 1 */
  const [text, setText] = useState("randomness"); /* 2 */

  const clickHandle = () => {
    if (text === "randomness") {
      setText("arbitrary");
    } else {
      setText("randomness");
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={clickHandle}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

/************** COMMENTS ************

***1: useState is a hook used to enable functional components to manage state, which was traditionally the domain of class components. With the introduction of hooks, functional components can now have stateful logic without the need for a class.
The useState hook is used to declare state variables in functional components. It takes an initial state as an argument and returns an array with two elements: the current state value and a function that can be used to update the state.

***2: Here we are destructuring the 2 elements returned by useState, text = the current value of the state which we set as "randomness" in 'useState("randomness")' and setText which is the function that can be used to update the state

***3: <h1>{text}</h1> will print the current value of the state variable and will change with every click of the button.

***4: <React.Fragment> is a special component provided by React that allows you to group multiple children elements without introducing an additional DOM element.
You can also use the shorthand syntax for fragments, which is an empty angle bracket syntax (<> and </>).
Fragments are especially useful in situations where a single parent element is required, such as when mapping over an array of elements.

*/
