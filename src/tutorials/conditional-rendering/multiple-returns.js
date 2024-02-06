import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState({}); /* 1 */

  const getUser = async () => {
    try {
      const response = await fetch(url);
      if (response.status >= 200 && response.status <= 299) {
        const user = await response.json();
        console.log(user);
        setUser(user);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>We have encountered an Error!</h1>
      </div>
    );
  }
  const { login, avatar_url } = user; /* 2 */
  return (
    <ul className="users">
      <li>
        <img src={avatar_url} alt={login} />
        <div>
          <h3>{login}</h3>
        </div>
      </li>
    </ul>
  );
};

export default MultipleReturns;

/************* COMMENTS **************

***1:  In our code, user is an object returned from the API, not an array. Therefore, in order to access its properties we must initialize our state to be an object:
const [user, setUser] = useState({});
Then, in your return statement, you can directly access the properties of the user object

***2: in order to access these variables in our return statement we must define them outside the getUser(), otherwise we wont be able to access them.

*/
