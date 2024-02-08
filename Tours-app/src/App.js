import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeItem = (id) => {
    const newList = tours.filter((tour) => tour.id !== id);
    setTours(newList);
  };

  const FetchToursApi = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    FetchToursApi();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No more tours left</h2>
          <button className="btn" onClick={FetchToursApi}>
            Refresh list
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} removeItem={removeItem} />
      {/* 1 */}
    </main>
  );
}

export default App;

/*************** COMMENTS **************

*** 1: In React, when you want to communicate between components, you often need to pass data or functions as props from a parent component to a child component. This allows child components to interact with the data or trigger actions in the parent component.here we are passing the useState(tours) "{tours}" as props to the Tours component which is our array of tours object.

Also, we are passing removeItem, which is a function defined in the parent component (App.js). we want this function to be accessible inside the Tours component, which is a child component of App.js.

Therefore, we pass removeItem as an extra prop when rendering the Tours component:

<Tours tours={tours} removeItem={removeItem} />

This makes the removeItem function available within the Tours component as a prop. Inside the Tours component, you can then access removeItem via the props object and use it to perform actions such as removing items from the tours state.
NOTICE that we are also passing this prop inside Tours and also inside Tour components as props.

*/
