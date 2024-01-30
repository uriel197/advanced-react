import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Uriel",
    age: 47,
    message: "I am learning React",
  }); /* 1 */

  // const [name, setName] = useState("Uri");
  // const [age, setAge] = useState(47);
  // const [message, setMessage] = useState("new message");

  const changeData = () => {
    setPerson({ ...person, message: "Really?!!!" });
  }; /* 2 */

  // const changeData = () => {
  //   setMessage("clandestino!!!");
  // };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeData}>
        Change message
      </button>
    </>
    // <>
    //   <h3>{name}</h3>
    //   <h3>{age}</h3>
    //   <h3>{message}</h3>
    //   <button className="btn" onClick={changeData}>
    //     Change message
    //   </button>
    // </>
  );
};

export default UseStateObject;

/*********** COMMENTS ***********

***1: here we are passing an object to useState() and we are assigning it to 'person'.

***2: we are defining the function that will run onClick and we need to refresh the object using spread operatior otherwise, it will be replaced with the new value, since we want to change just the message we need to first pass the whole object again with '...person' and then change the message.

***3: The snippets that are commented out are the option that we could use instead of creating an object, we could use either of them.

*/
