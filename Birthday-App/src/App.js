import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays today</h3>
        <List people={people} /> {/* 1 */}
        <button onClick={() => setPeople([])}>clear All</button>
      </section>
    </main>
  );
}

export default App;

/************ COMMENTS ***********

Note: The props object is automatically created and passed by React when a component is used in JSX. In the context of our List component and App function, React is responsible for creating and passing the props object.
When you use the List component in the App component like this: <List people={people} /> React automatically creates a props object with a property named people and assigns the value of people (which comes from the state) to it. The props object is then passed to the List component.
So, to clarify, React is handling the creation and passing of the props object. In the List component, you're simply defining the parameter to receive these props, and you can destructure them if needed.

***1: In the provided code, the line "<list person={person} />" is part of the List component.  this line is creating and rendering a List component for each person in the List array, and it's passing the corresponding people object as a prop named person to each List component. The List component then uses this prop to display the details of the person, such as the id, name, age, and image.
The choice of naming the prop as person is arbitrary and determined by the developer who wrote the code. In React, when you create a component and pass data to it using props, you can choose any valid JavaScript identifier as the name for the prop.
The prop being passed is named person, and it receives the current person object from the map iteration over the people array. 

*/
