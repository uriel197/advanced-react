import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const users = await response.json();
      setUsers(users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []); /* 1 */

  return (
    <>
      <h2>Github users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <h5>{html_url}</h5>
              </div>
            </li>
          );
        })}
      </ul>
      ;
    </>
  );
};

export default UseEffectFetchData;

/*********** COMMENTS **************

***1: When you use the useEffect hook without providing a dependency array, the effect will run on every render of the component. This means that any code inside the useEffect block will be executed whenever the component re-renders.

Now, let's consider our scenario where we're making a network request (fetching data) inside the useEffect but without a dependency array:

Without a dependency array, this effect will run after every render, and each time it runs, it triggers a network request. The network request itself triggers a state update (setUsers in this case), which causes a re-render of the component.

The re-render, in turn, triggers the useEffect again, leading to another network request, another state update, and so on. This creates a cycle where the component continuously re-renders, and the useEffect keeps firing, resulting in an infinite loop.

To prevent this infinite loop, it's crucial to specify a dependency array. By doing so, you ensure that the effect runs only once or when those dependencies change, not on every render.

*/
