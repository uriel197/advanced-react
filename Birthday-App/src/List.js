import React from "react";

const List = ({ people }) => {
  /* 1 */
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <div>
              <img src={image} alt={name} />
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;

/************* COMMENT *************

***1:  The line "const List = ({ people }) => {}" is a concise way to destructure the people prop directly in the function parameter. It is equivalent to writing:

const List = (props) => {
  const { people } = props;
  // rest of the component logic
}

Using the curly braces {} in the function parameter is a shorthand syntax in JavaScript to directly extract properties from an object. In this case, it's extracting the people prop from the props object that is implicitly passed to the List component.

So, when you use <List people={people} /> in the App component, you're passing the people prop, and in the List component, you are directly destructuring it from the props object in the function parameter. It's a cleaner and more concise way to access the props. this is what the props object looks like:

 {  people: [
        {
            "id": 1,
            "name": "Bertie Yates",
            "age": 29,
            "image": "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg"
        },
        {
            "id": 2,
            "name": "Hester Hogan",
            "age": 32,
            "image": "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg"
        },
        {
            "id": 3,
            "name": "Larry Little",
            "age": 36,
            "image": "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
        },
        {
            "id": 4,
            "name": "Sean Walsh",
            "age": 34,
            "image": "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg"
        },
        {
            "id": 5,
            "name": "Lola Gardner",
            "age": 29,
            "image": "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
        }
    ]
}

***2: The curly braces {} in the snippet {people.map((person) => ... )} are used to indicate a block of JavaScript code within JSX. In React, when you want to include JavaScript expressions or code within JSX, you wrap it in curly braces.
*/
