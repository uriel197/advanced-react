import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value }); /* 1 */
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = {
        ...person,
        id: new Date().getTime().toString(),
      }; /* 2 */
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
  };
  return (
    <>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
      <article>
        {people.map((person) => {
          const { id, firstName, email, age } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;

/*************** COMMENTS ****************

***1: The expression [name]: value is an example of computed property names in JavaScript. It's used when you want to dynamically set a property name in an object literal.
In this context, name is a variable that holds the name of the property you want to set, and value is the value you want to assign to that property.
For example, if name holds the value "firstName", and value holds "John", [name]: value would create or update an object with the key/pair {firstName: "John"} .

***2: here we are adding an id property to the person object every time a new person is created.
*/
