import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data); /* 1 */
  const removePerson = (id) => {
    let newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div className="item" key={id}>
            <h4>{name}</h4>
            <button className="btn" onClick={() => removePerson(id)}>
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default UseStateArray;

/*********** COMMENTS ************

***1: Here we are calling React.useState() instead of importing it, either of them is allowed.

***2: onClick={() => removePerson(id)} because we are calling the function inside onClick we can not do it like this: onClick={removePerson(id)} because this will call the function on load and it will throw an error. for that reason we must add '() =>' before it.


*/
