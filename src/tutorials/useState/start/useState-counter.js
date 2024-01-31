import React, { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  const reset = () => {
    /* 1 */
    setCounter(0);
  };

  const lateIncrease = () => {
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

***1: Here we are defining the function we are passing to onClick instead of passing it directly as we did with the other 2, only to show that we can do it either way, pass it as a call function or pass it directly to the onClick().

*/
