import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const reset = () => {
    setCounter(0);
  };

  const lateIncrease = () => {
    /* 1 */
    setTimeout(() => {
      setCounter((prevState) => prevState + 1);
    }, 2000);
  };

  return (
    <>
      <h1>Clock Counter</h1>
      <h1>{counter}</h1>
      <button
        type="button"
        className="btn"
        onClick={() => setCounter(counter - 1)}
      >
        Decrease
      </button>
      <button type="button" className="btn" onClick={reset}>
        Reset
      </button>
      <button
        type="button"
        className="btn"
        onClick={() => setCounter(counter + 1)}
      >
        Increase
      </button>
      <section style={{ marginTop: "4rem" }}>
        <h1>Complex Time Counter</h1>
        <h1>{counter}</h1>
        <button className="btn" onClick={lateIncrease}>
          Increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;

/************* COMMENTS *************

***1:  The useState hook in React returns an array with two elements:

Current State Value: This is the current value of the state variable. It's the first element in the array.

State Update Function: This is a function that allows you to update the state. It's the second element in the array. This function can be called with a new value or a 'function' that takes the previous state as an argument and returns the new state. which means, that setCounter is a function that when returns a "function" as it does in this case, that function has the previous value as a parameter.
example of the different ways of using setCounter:

const lateIncrease = () => {
  setTimeout(() => {
    // This may capture outdated state value due to closure
    setCount(count + 1);
  }, 2000);
};

or 
const lateIncrease = () => {
  setTimeout(() => {
    // Using functional update to ensure correct state
    setCount((prevCount) => prevCount + 1);
  }, 2000);
};


in the first example, When setTimeout is called, it creates a closure that captures the current scope, including the count variable, which is equal to '0'.

After 2 seconds, when the timer callback is executed, it uses the captured count value. This value might be outdated because React does not re-run the component function immediately after the state is updated.

Here's a step-by-step breakdown of what happens during consecutive clicks:

Click 1:

setTimeout is called, capturing the initial count value.
After 2 seconds, the callback updates the state using the captured count + 1.
Click 2 (within the 2-second interval, before the 2 seconds end):

setTimeout is called again, capturing the same initial count value.
However, the timer from Click 1 is still counting down.
Click 3 (within the 2-second interval):

setTimeout is called again, capturing the same initial count value.
The timer from Click 1 is still counting down, and the timer from Click 2 is also counting down.
After the first click, subsequent clicks result in setCount(count + 1) using the outdated captured count value.

To address this issue, it's recommended to use the functional update form of setCount inside setTimeout to ensure that the update is based on the latest state value. 
*/
