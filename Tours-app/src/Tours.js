import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeItem }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeItem={removeItem} />;
        })}
        {/* 1 */}
      </div>
    </section>
  );
};

export default Tours;

/*************** COMMENTS **************

*** 1: The spread operator {...tour} is used to pass all the properties of the tour object as props to the Tour component. This shorthand is commonly used in React when you want to pass all properties of an object as props to a child component without explicitly specifying each one.

*/
