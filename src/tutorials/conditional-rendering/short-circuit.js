import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <>
      <h2>{firstValue}</h2>
      <h2>Value: {secondValue}</h2>
      <h1>check for state</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        change state
      </button>
      {isError && <h1>clean code</h1>}
      {/* <h1>{text || "John Doe"}</h1>
      {text && <h1>Hello world</h1>} */}
      {isError ? <p>there are no errors</p> : <p>there is an error</p>}
    </>
  );
};

export default ShortCircuit;

/************** COMMENTS **************

Short-circuiting of logical operators:

The logical operators && and || handle values of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the right-hand value.
The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise.
We can use this functionality as a way to fall back on a default value. If you have a value that might be empty, you can put || after it with a replacement value. If the initial value can be converted to false, you’ll get the replacement instead. The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as false, while all the other values count as true. So 0 || -1 produces -1, and "" || "!?" yields "!?".
The && operator works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right.
Another important property of these two operators is that the part to their right is evaluated only when necessary. In the case of true || X, no matter what X is—even if it’s a piece of program that does something terrible—the result will be true, and X is never evaluated. The same goes for false && X, which is false and will ignore X. This is called short-circuit evaluation.
The conditional operator works in a similar way. Of the second and third values, only the one that is selected is evaluated.

***1: () => setIsError(!isError) is equal to writting:
() => {
    if(!isError) setIsError(true);
    else setIsError(false);
}

the ternary operator checks:
isError ? there are no errors : there is an error;
which means; if "isError" is set to true, it will return the statement to its right, else, if it is set to false, it will return the statement after the colon. isError set to true === no errors
*/
